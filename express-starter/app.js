// eslint-disable-next-line import/no-unresolved
const express = require('express');
const path = require('path');

const app = express();

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});
app.use(express.static('./build'));

// Error handler
app.use((err, req, res) => {
  console.error(err);
  res.status(500).send('Internal Serverless Error');
});
app.listen(9000, () => {
  console.log('Server start on http://localhost:9000');
});
module.exports = app;
