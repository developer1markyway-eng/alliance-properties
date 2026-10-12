const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const LEADS_FILE = path.join(ROOT_DIR, 'leads.json');
const CSV_FILE = path.join(ROOT_DIR, 'leads.csv');

// Initialize CSV header if file does not exist
if (!fs.existsSync(CSV_FILE)) {
  const headers = '"Submission Date and Time","Full Name","Email Address","Phone Number","Company Name","Requirement / Message"\n';
  fs.writeFileSync(CSV_FILE, headers, 'utf8');
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = parsedUrl.pathname;

  // Endpoint: Mock / Test Lead Submission
  if (req.method === 'POST' && pathname === '/api/submit-lead') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
      // Protect against overly large payloads
      if (body.length > 1e6) req.destroy();
    });

    req.on('end', () => {
      try {
        const lead = JSON.parse(body || '{}');

        // Check if test error simulation requested
        if (parsedUrl.searchParams.get('error') === 'true') {
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ status: 'error', message: 'Simulated server error for testing' }));
          return;
        }

        // Validate required fields
        if (!lead.fullName || !lead.email || !lead.phone) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ status: 'error', message: 'Full Name, Email, and Phone Number are required.' }));
          return;
        }

        const now = new Date();
        const formattedDate = now.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'medium' });
        const record = {
          timestamp: formattedDate,
          fullName: lead.fullName,
          email: lead.email,
          phone: lead.phone,
          company: lead.company || '',
          message: lead.message || ''
        };

        // 1. Append to leads.json
        let leads = [];
        if (fs.existsSync(LEADS_FILE)) {
          try {
            leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8') || '[]');
          } catch (e) {
            leads = [];
          }
        }
        leads.push(record);
        fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf8');

        // 2. Append to leads.csv
        const escapeCsv = (str) => `"${(str || '').replace(/"/g, '""')}"`;
        const csvLine = [
          escapeCsv(record.timestamp),
          escapeCsv(record.fullName),
          escapeCsv(record.email),
          escapeCsv(record.phone),
          escapeCsv(record.company),
          escapeCsv(record.message)
        ].join(',') + '\n';
        fs.appendFileSync(CSV_FILE, csvLine, 'utf8');

        console.log(`[LEAD RECEIVED] ${record.fullName} (${record.phone}, ${record.email})`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'success', message: 'Enquiry received and saved successfully.', lead: record }));
      } catch (err) {
        console.error('Error handling lead submission:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'error', message: 'Internal server error processing submission.' }));
      }
    });
    return;
  }

  // Static file serving
  if (pathname === '/') pathname = '/index.html';
  
  // Normalize and prevent path traversal
  const safePath = path.normalize(decodeURIComponent(pathname)).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(ROOT_DIR, safePath);

  if (!filePath.startsWith(ROOT_DIR)) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` Alliance Properties Local Development Server Running!`);
  console.log(` Local URL: http://localhost:${PORT}`);
  console.log(` Contact Form API: http://localhost:${PORT}/api/submit-lead`);
  console.log(`=======================================================`);
});
