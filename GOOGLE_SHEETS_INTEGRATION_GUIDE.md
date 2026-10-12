# Alliance Properties — Google Sheets Contact Form Integration Guide

This guide walks you through connecting the **Visitor Contact Form Popup** on your website to your own private **Google Sheet**. Every time a visitor submits their details, a new lead row is automatically appended to your sheet.

---

## Step 1: Create a New Google Sheet

1. Open your web browser and navigate to [Google Sheets](https://sheets.new) (sign in with the Google account you wish to manage leads with).
2. Rename the spreadsheet at the top left to something clear, such as:
   `Alliance Properties - Website Leads`

---

## Step 2: Open the Apps Script Editor

1. In the Google Sheets top menu bar, click on **Extensions** > **Apps Script**.
2. A new tab will open with the Apps Script code editor.
3. Rename the project at the top left from *“Untitled project”* to:
   `Alliance Properties Leads Backend`

---

## Step 3: Paste the Backend Script

1. In the Apps Script code editor, delete any existing code inside `Code.gs`.
2. Open the file [Code.gs](google-apps-script/Code.gs) in this project, copy all of its contents, and paste it into the Apps Script editor.
3. Click the **Save** icon (💾 or press `Ctrl + S`).

---

## Step 4: Deploy as a Web App

This step creates the secure webhook URL that your website will send contact details to.

1. In the top-right corner of the Apps Script window, click the blue **Deploy** button > **New deployment**.
2. Click the gear icon (**Select type**) next to "Select type" on the left and select **Web app**.
3. Fill in the following deployment configuration:
   - **Description:** `Alliance Properties Lead Form v1`
   - **Execute as:** `Me (your-email@gmail.com)` *(Important: do not change this, so the script can write to your sheet)*
   - **Who has access:** `Anyone` *(Important: required so visitors' submissions can reach the script)*
4. Click **Deploy**.
5. If Google displays an *“Authorization required”* prompt:
   - Click **Authorize access**.
   - Select your Google account.
   - If you see *“Google hasn’t verified this app”*, click **Advanced** (bottom left), then click **Go to Alliance Properties Leads Backend (unsafe)**.
   - Click **Allow**.
6. Google will now display your **Web App URL** (it looks like this):
   `https://script.google.com/macros/s/AKfycbx.../exec`
7. Click **Copy** to copy this Web App URL.

---

## Step 5: Update the Web App URL in `script.js`

1. Open `script.js` in your website folder.
2. Locate line 657 near the bottom of `script.js`:
   ```javascript
   var GOOGLE_SCRIPT_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbwYOUR_SCRIPT_ID_HERE/exec";
   ```
3. Replace `"https://script.google.com/macros/s/AKfycbwYOUR_SCRIPT_ID_HERE/exec"` with your copied Web App URL:
   ```javascript
   var GOOGLE_SCRIPT_WEBAPP_URL = "https://script.google.com/macros/s/YOUR_ACTUAL_ID/exec";
   ```
4. Save `script.js`.

---

## What Happens When a Visitor Submits?

The Google Sheet will automatically format with the following columns on the first submission:

| Submission Date and Time | Full Name | Email Address | Phone Number | Company Name | Requirement / Message |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 13 Oct 2026, 01:15:30 AM | Rajesh Sharma | rajesh@company.com | 9876543210 | Acme Corp | Need 1,500 sq.ft. office space |

### Security & Privacy Highlights:
- **No Private Keys on Frontend:** The website only sends the visitor's form data to the secure endpoint. No Google passwords or sensitive credentials are in the HTML or JavaScript.
- **Private Spreadsheet:** The spreadsheet remains completely private to you and anyone you share it with. Website visitors cannot see your sheet or view existing leads.
- **Concurrent-Safe:** The script uses Google's `LockService` to prevent data collisions if multiple visitors submit at the same time.
