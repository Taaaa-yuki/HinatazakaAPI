const express = require('express');
const app = express();
const membersRouter = require('./routes/members.js');
const fs = require('fs');

app.use(express.json());

app.use('/members', membersRouter);

app.get('/data/members.json', (req, res) => {
  const jsonData = fs.readFileSync('data/members.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(jsonData);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
