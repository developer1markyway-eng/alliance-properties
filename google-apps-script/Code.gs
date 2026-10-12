// ALLIANCE PROPERTIES - CONTACT FORM BACKEND

var FORM_TOKEN = "AP-7f3k9Q2xLm48";   // must match script.js
var TIMEZONE = "Asia/Kolkata";
var LIMITS = { fullName: 100, email: 150, phone: 20, company: 150, message: 2000 };

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
  } catch (lockError) {
    return jsonResponse({ status: "error", message: "Server is busy. Please try again in a moment." });
  }

  try {
    var data = parsePayload(e);

    // Hidden spam trap: real visitors never fill this
    if (clean(data.website)) {
      return jsonResponse({ status: "success", message: "Enquiry saved successfully." });
    }

    if (FORM_TOKEN && clean(data.token) !== FORM_TOKEN) {
      return jsonResponse({ status: "error", message: "Invalid submission." });
    }

    var fullName = clean(data.fullName);
    var email    = clean(data.email);
    var phone    = clean(data.phone);
    var company  = clean(data.company);
    var message  = clean(data.message);

    if (!fullName || !email || !phone) {
      return jsonResponse({ status: "error", message: "Full Name, Email Address, and Phone Number are required." });
    }

    var values = { fullName: fullName, email: email, phone: phone, company: company, message: message };
    for (var key in LIMITS) {
      if (values[key].length > LIMITS[key]) {
        return jsonResponse({ status: "error", message: "One or more fields are too long." });
      }
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return jsonResponse({ status: "error", message: "Please enter a valid email address." });
    }
    var phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 7 || phoneDigits.length > 15 || !/^[0-9+()\-\s.]+$/.test(phone)) {
      return jsonResponse({ status: "error", message: "Please enter a valid phone number." });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    if (sheet.getLastRow() === 0) {
      setupSheetHeaders(sheet);
    }

    var timestamp = Utilities.formatDate(new Date(), TIMEZONE, "dd MMM yyyy, hh:mm:ss a");
    var targetRow = sheet.getLastRow() + 1;

    // Store everything as plain text (blocks formula injection, keeps "+91" and leading zeros)
    var rowRange = sheet.getRange(targetRow, 1, 1, 6);
    rowRange.setNumberFormat("@");
    rowRange.setValues([[timestamp, fullName, email, phone, company, message]]);
    rowRange.setFontFamily("Montserrat").setFontSize(10).setVerticalAlignment("top");
    sheet.getRange(targetRow, 6).setWrap(true);

    return jsonResponse({ status: "success", message: "Enquiry saved successfully.", row: targetRow });

  } catch (error) {
    console.error(error);
    return jsonResponse({ status: "error", message: "Something went wrong. Please try again." });
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return jsonResponse({ status: "active", message: "Alliance Properties Contact Form endpoint is online." });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function clean(value) {
  return (value === undefined || value === null) ? "" : value.toString().trim();
}

function parsePayload(e) {
  if (e && e.postData && e.postData.contents) {
    try { return JSON.parse(e.postData.contents); }
    catch (err) { return e.parameter || {}; }
  }
  return (e && e.parameter) ? e.parameter : {};
}

function setupSheetHeaders(sheet) {
  var headers = ["Submission Date and Time", "Full Name", "Email Address", "Phone Number", "Company Name", "Requirement / Message"];
  var r = sheet.getRange(1, 1, 1, headers.length);
  r.setValues([headers]);
  r.setFontWeight("bold").setFontFamily("Montserrat").setFontSize(10);
  r.setBackground("#E31E24").setFontColor("#FFFFFF").setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
  sheet.setColumnWidth(1, 200);
  sheet.setColumnWidth(2, 180);
  sheet.setColumnWidth(3, 220);
  sheet.setColumnWidth(4, 160);
  sheet.setColumnWidth(5, 180);
  sheet.setColumnWidth(6, 320);
}
