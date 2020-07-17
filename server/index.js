const express = require('express');
const app = express();
const { User } = require('./model/Users');
const bodyParser = require('body-parser');

const port = 5000;
const mongoose = require('mongoose');
const config = require('./config/key.js');

app.use(bodyParser.urlencoded({ extended: false })); // application/x-www-form-urlencoded 분석
app.use(bodyParser.json()); // application/json 분석

mongoose
  .connect(config.mongoDB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('hello'));

app.post('/api/users/register', (req, res) => {
  // 클라이언트에서 회원 정보를 전달 받음.
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
