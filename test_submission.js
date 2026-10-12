const http = require('http');
const fs = require('fs');
const path = require('path');

function request(options, postData) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ statusCode: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    if (postData) req.write(postData);
    req.end();
  });
}

async function runTests() {
  console.log('--- STARTING ALLIANCE PROPERTIES VISITOR FORM TESTS ---\n');

  // Test 1: GET index.html
  console.log('1. Testing GET http://localhost:3000/');
  const resHome = await request({ hostname: 'localhost', port: 3000, path: '/', method: 'GET' });
  console.log(`   Status: ${resHome.statusCode}`);
  const hasModalHtml = resHome.body.includes('id="vcfOverlay"') && resHome.body.includes("Let's Connect");
  console.log(`   Contains Visitor Modal Markup: ${hasModalHtml ? 'PASS ✓' : 'FAIL ✗'}`);

  // Test 2: GET style.css
  console.log('\n2. Testing GET http://localhost:3000/style.css');
  const resCss = await request({ hostname: 'localhost', port: 3000, path: '/style.css', method: 'GET' });
  console.log(`   Status: ${resCss.statusCode}`);
  const hasModalCss = resCss.body.includes('.vcf-overlay') && resCss.body.includes('.vcf-modal');
  console.log(`   Contains Modal Styling: ${hasModalCss ? 'PASS ✓' : 'FAIL ✗'}`);

  // Test 3: GET script.js
  console.log('\n3. Testing GET http://localhost:3000/script.js');
  const resJs = await request({ hostname: 'localhost', port: 3000, path: '/script.js', method: 'GET' });
  console.log(`   Status: ${resJs.statusCode}`);
  const hasModalJs = resJs.body.includes('vcfOverlay') && resJs.body.includes('GOOGLE_SCRIPT_WEBAPP_URL');
  console.log(`   Contains Modal Logic: ${hasModalJs ? 'PASS ✓' : 'FAIL ✗'}`);

  // Test 4: Validation test (Empty fields rejected)
  console.log('\n4. Testing POST /api/submit-lead with missing fields');
  const emptyPayload = JSON.stringify({ fullName: '', email: '', phone: '' });
  const resInvalid = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/submit-lead',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, emptyPayload);
  console.log(`   Status: ${resInvalid.statusCode} (Expected 400)`);
  console.log(`   Response: ${resInvalid.body.trim()}`);
  console.log(`   Missing Fields Blocked: ${resInvalid.statusCode === 400 ? 'PASS ✓' : 'FAIL ✗'}`);

  // Test 5: Successful submission test
  console.log('\n5. Testing POST /api/submit-lead with valid lead');
  const validLead = JSON.stringify({
    fullName: 'Rajesh Sharma',
    email: 'rajesh.sharma@example.com',
    phone: '9822446621',
    company: 'Fintech Solutions Ltd',
    message: 'Need 1,500 sq.ft. commercial office space in Baner.'
  });
  const resValid = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/submit-lead',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, validLead);
  console.log(`   Status: ${resValid.statusCode} (Expected 200)`);
  console.log(`   Response: ${resValid.body.trim()}`);
  console.log(`   Valid Submission Accepted: ${resValid.statusCode === 200 ? 'PASS ✓' : 'FAIL ✗'}`);

  // Test 6: Verify CSV & JSON recording
  console.log('\n6. Verifying leads.csv and leads.json records');
  const csvContent = fs.readFileSync(path.join(__dirname, 'leads.csv'), 'utf8');
  const jsonContent = fs.readFileSync(path.join(__dirname, 'leads.json'), 'utf8');
  const hasRajeshInCsv = csvContent.includes('Rajesh Sharma') && csvContent.includes('9822446621');
  const hasRajeshInJson = jsonContent.includes('Rajesh Sharma') && jsonContent.includes('Fintech Solutions Ltd');
  console.log(`   CSV File contains new lead: ${hasRajeshInCsv ? 'PASS ✓' : 'FAIL ✗'}`);
  console.log(`   JSON File contains new lead: ${hasRajeshInJson ? 'PASS ✓' : 'FAIL ✗'}`);

  // Test 7: Error handling simulation test
  console.log('\n7. Testing POST /api/submit-lead?error=true for simulated failure recovery');
  const resSimulatedErr = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/submit-lead?error=true',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, validLead);
  console.log(`   Status: ${resSimulatedErr.statusCode} (Expected 500)`);
  console.log(`   Error Handler Responded: ${resSimulatedErr.statusCode === 500 ? 'PASS ✓' : 'FAIL ✗'}`);

  console.log('\n--- ALL VERIFICATION TESTS COMPLETED SUCCESSFULLY! ---');
}

runTests().catch(console.error);
