const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.pug');

mongoose.connect('mongodb://localhost:27017/wiki', {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB Connection');
});

const index = require('./routes/index');
const api = require('./routes/api');

app.use('/', index);
app.use('/api', api);

app.listen(port,() => {
  console.log('The server is running on port :', port)
});

module.exports = app;
