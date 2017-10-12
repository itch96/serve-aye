'use strict'

const express = require('express');
let app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.listen(PORT, (err) => {
  if(err) console.log(err);
  console.log(`Server running on port ${PORT}`);
});