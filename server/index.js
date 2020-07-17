const express = require('express');
const app = express();
const { User } = require('./model/Users');
const { auth } = require('./middleware/auth');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const port = 5000;
const mongoose = require('mongoose');
const config = require('./config/key.js');

app.use(bodyParser.urlencoded({ extended: false })); // application/x-www-form-urlencoded 분석
app.use(bodyParser.json()); // application/json 분석
app.use(cookieParser());

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
    if (err) return res.json({ registerSuccess: false, err });
    return res.status(200).json({
      registerSuccess: true,
    });
  });
});

app.post('/api/users/login', (req, res) => {
  // 요청된 이메일 체크
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({ loginSuccess: false, message: '이메일이 존재하지 않습니다.' });
    }
    // 비밀번호 체크
    user.comparePassword(req.body.password, (err, isMatch) => {
      // 비밀번호가 틀린 경우
      if (!isMatch) return res.json({ loginSuccess: false, message: '비밀번호가 틀렸습니다.' });
      // 비밀번호가 맞은 경우 토큰 생성
      user.createToken((err, user) => {
        if (err) return res.status(400).send(err);
        // 토큰 저장 => 쿠키
        res.cookie('auth', user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

// 로그인 유저 확인
app.post('/api/users/auth', auth, (req, res) => {
  // auth 미들웨어 수행 시 req에서 user 정보 조회 가능
  res.status(200).json({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.role === 0 ? false : true, // role: 1 > admin
    isAuth: true,
    role: req.user.role,
    image: req.user.image,
  });
});

app.get('/api/users/logout', auth, (req, res) => {
  // auth 미들웨어 수행 시 req에서 user 정보 조회 가능
  // user를 찾아 token 제거
  User.findOneAndUpdate({ _id: req.user._id }, { token: '' }, (err, user) => {
    if (err) return res.json({ logoutSuccess: false, err });
    return res.status(200).json({ logoutSuccess: true });
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
