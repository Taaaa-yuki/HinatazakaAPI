const express = require('express');
const app = express();
const membersRouter = require('./routes/members.js');
const fs = require('fs');
const path = require('path');
const port = 3000;

app.use(express.json());

app.use('/members', membersRouter);

app.get('/data/members.json', (req, res) => {
  const jsonData = fs.readFileSync(path.join(__dirname, 'data/members.json'), 'utf-8');
  res.setHeader('Content-Type', 'application/json');
  res.send(jsonData);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
