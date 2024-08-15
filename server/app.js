const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Abdullah Barudgar Server');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});