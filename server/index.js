const express = require('express');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
const { mongoDB_url } = require('./config/config.js');

mongoose
  .connect(mongoDB_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('hello'));

app.listen(port, () => console.log(`Listening on port ${port}`));
