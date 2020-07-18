import React, { useState } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';

const RegisterPage = ({ history }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('비밀번호가 서로 다릅니다');
    }

    dispatch(registerUser({ email, password, confirmPassword })).then((res) => {
      if (res.payload.registerSuccess) {
        history.push('/login');
      } else {
        alert('register error');
      }
    });
  };

  return (
    <ReisgerContainer>
      <form className='registerForm' onSubmit={onSumbitHandler}>
        <label>Email</label>
        <input type='email' name='email' value={email} onChange={emailHandler} />
        <label>name</label>
        <input type='text' name='name' value={name} onChange={nameHandler} />
        <label>password</label>
        <input type='password' name='password' value={password} onChange={passwordHandler} />
        <label>confirmPassword</label>
        <input
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={confirmPasswordHandler}
        />
        <button type='submit'>Register</button>
      </form>
    </ReisgerContainer>
  );
};

export default withRouter(RegisterPage);

const ReisgerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .registerForm {
    display: flex;
    flex-direction: column;
  }
`;
