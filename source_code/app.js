const express = require('express');
const path = require('path');

const app = express();

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

module.exports = app;

//88ac0b67a0844badb96b6a1e15648fd1
