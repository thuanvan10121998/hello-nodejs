// app.js

const express = require('express');
const app = express();
const port = 3000;

// Định nghĩa một route cho URL gốc
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Định nghĩa một route cho URL /about
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Bắt đầu server và lắng nghe các yêu cầu tại cổng đã định
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
