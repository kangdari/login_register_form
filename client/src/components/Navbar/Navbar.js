import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../_actions/auth_action';

const Navbar = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({
    auth: state.auth.auth,
  }));

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <NavbarBlock>
      <h2 className='logo'>Logo</h2>
      <div className='right_menu'>
        <Button to='/'>Home</Button>
        {/* 링크 추가 */}
        <Button to='/about'>About</Button>
      </div>
      <div className='left_menu'>
        {!auth.isAuth ? (
          <>
            <Button to='/register'>회원가입</Button>
            <Button to='/login'>로그인</Button>
          </>
        ) : (
          <Button onClick={onClick}>로그아웃</Button>
        )}
      </div>
    </NavbarBlock>
  );
};

const NavbarBlock = styled.div`
  position: fixed;
  width: 1000px;
  margin: 0 auto;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;

  .left_menu {
    margin-left: auto;
  }
`;

export default Navbar;
