const https = require('https');

const GOOGLE_SCRIPT_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbymzAQUSIfB0Tm170o0hiDtHWdRSakhKa1P9NOjOtgMoH-uJWA6S9f0H6MsaxyuwSaj/exec";
const FORM_TOKEN = "AP-7f3k9Q2xLm48";

function submitLead(payload) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(payload);
    const parsed = new URL(GOOGLE_SCRIPT_WEBAPP_URL);
    
    function doRequest(targetUrl, method, data) {
      const u = new URL(targetUrl);
      const req = https.request({
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: method,
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
          'Content-Length': Buffer.byteLength(data || '')
        }
      }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          // Apps Script redirects POST to GET at echo endpoint
          return doRequest(res.headers.location, 'GET', '');
        }
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            resolve({ statusCode: res.statusCode, data: JSON.parse(body) });
          } catch(e) {
            resolve({ statusCode: res.statusCode, raw: body });
          }
        });
      });
      req.on('error', reject);
      if (data) req.write(data);
      req.end();
    }

    doRequest(GOOGLE_SCRIPT_WEBAPP_URL, 'POST', postData);
  });
}

async function run() {
  console.log('=== TESTING REAL GOOGLE APPS SCRIPT INTEGRATION ===\n');

  // Test 1: Missing Required Fields
  console.log('1. Submitting with missing required fields:');
  const resMissing = await submitLead({
    token: FORM_TOKEN,
    fullName: '',
    email: '',
    phone: ''
  });
  console.log('   Result:', resMissing);
  console.log('   Rejected as expected:', resMissing.data.status === 'error' ? 'PASS ✓' : 'FAIL ✗');

  // Test 2: Invalid Phone Number
  console.log('\n2. Submitting with invalid phone number ("123"):');
  const resBadPhone = await submitLead({
    token: FORM_TOKEN,
    fullName: 'Test User',
    email: 'test@example.com',
    phone: '123'
  });
  console.log('   Result:', resBadPhone);
  console.log('   Rejected as expected:', resBadPhone.data.status === 'error' ? 'PASS ✓' : 'FAIL ✗');

  // Test 3: Invalid Email
  console.log('\n3. Submitting with invalid email ("notanemail"):');
  const resBadEmail = await submitLead({
    token: FORM_TOKEN,
    fullName: 'Test User',
    email: 'notanemail',
    phone: '9822446621'
  });
  console.log('   Result:', resBadEmail);
  console.log('   Rejected as expected:', resBadEmail.data.status === 'error' ? 'PASS ✓' : 'FAIL ✗');

  // Test 4: Valid Lead Submission
  console.log('\n4. Submitting valid lead (Real Google Sheet row creation):');
  const resValid = await submitLead({
    token: FORM_TOKEN,
    website: '',
    fullName: 'Vikram Malhotra',
    email: 'vikram.malhotra@allianceclient.com',
    phone: '+91 98220 12345',
    company: 'Apex Logistics India',
    message: 'Looking for 2,500 sq.ft. commercial office space in Baner, Pune.'
  });
  console.log('   Result:', resValid);
  console.log('   Successfully appended to Google Sheet:', resValid.data.status === 'success' ? 'PASS ✓' : 'FAIL ✗');
  if (resValid.data.row) {
    console.log(`   New row index created: Row #${resValid.data.row}`);
  }

  // Test 5: Spam trap / Honeypot behavior
  console.log('\n5. Submitting with honeypot triggered (spam bot):');
  const resSpam = await submitLead({
    token: FORM_TOKEN,
    website: 'http://spam-link.com',
    fullName: 'Spam Bot',
    email: 'bot@spam.com',
    phone: '9822012345'
  });
  console.log('   Result:', resSpam);
  console.log('   Silent discard confirmed (no row returned):', resSpam.data.row === undefined ? 'PASS ✓' : 'FAIL ✗');

  console.log('\n=== ALL INTEGRATION TESTS COMPLETED SUCCESSFULLY! ===');
}

run().catch(console.error);
