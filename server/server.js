const chalk = require('chalk');
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.post('/api/no_json_parsing', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.use(express.json());

app.post('/api/yes_json_parsing', (req, res, next) => {
  console.log(req.body);
  res.sendStatus(200);
});

console.log(chalk.blue('__dirname = ', __dirname));
// __dirname is the directory of your file in this case server.js
// which is why we need to back out one directory so we can access /dist
// if no route is given it will default to '/'
app.use(express.static(path.join(__dirname, '../dist')));

// everything in the public folder is available to the front end using the '/' route
app.use(express.static(path.join(__dirname, '../public')));
app.use(
  '/puppy_images',
  express.static(path.join(__dirname, '../public/img/puppies'))
);
app.use(
  '/kitten_images',
  express.static(path.join(__dirname, '../public/img/kittens'))
);

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(chalk.green('Listening'));
});
