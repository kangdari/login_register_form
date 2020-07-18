import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const { userInfo, userError } = useSelector((state) => ({
    userInfo: state.user.userInfo,
    userError: state.user.userError,
  }));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 로그인 오류 처리
  useEffect(() => {
    if (userError) {
      if (userError.response.status === 401) {
        // 서버 예외 처리 오류 message
        setError(userError.response.data.message);
        // setError('이메일 또는 비밀번호가 틀렸습니다.');
        return;
      } else {
        setError('로그인 오류');
        return;
      }
    }
  }, [userError]);

  // 로그인 성공 처리
  useEffect(() => {
    if (userInfo.loginSuccess) {
      history.push('/');
    }
  }, [history, userInfo.loginSuccess]);

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();
    if ([email, password].includes('')) {
      setError('빈 칸을 입력하세요.');
      return;
    }
    dispatch(loginUser({ email, password }));
  };

  return (
    <LoginContainer>
      <form className='loginForm' onSubmit={onSumbitHandler}>
        <label>Email</label>
        <input type='email' value={email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type='password' value={password} onChange={onPasswordHandler} />
        {error ? <div>{error}</div> : ''}
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
