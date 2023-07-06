const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const router = jsonServer.router('data/writing_file.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8000;

__dirname="/";

app.use('/api', router);
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
