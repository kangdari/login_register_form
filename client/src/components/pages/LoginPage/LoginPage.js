import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password })).then((res) => {
      if (res.payload.loginSuccess) {
        // 로그인 성공 시 '/'으로 리다이렉팅
        history.push('/');
      } else {
        alert('로그인 실패');
      }
    });
  };

  return (
    <LoginContainer>
      <form className='loginForm' onSubmit={onSumbitHandler}>
        <label>Email</label>
        <input type='email' value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type='password' value={password} onChange={onPasswordHandler} />
        <button tyoe='sumbit'>Login</button>
      </form>
    </LoginContainer>
  );
};

export default withRouter(LoginPage);

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginForm {
    display: flex;
    flex-direction: column;
  }
`;
