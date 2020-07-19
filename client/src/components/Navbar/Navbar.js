import React from 'react';
import styled from 'styled-components';
import Button from '../Common/Button';
import palette from '../../utils/palette';

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
      <div className='navbar'>
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
      </div>
    </NavbarBlock>
  );
};

const NavbarBlock = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  padding: 10px 0;
  border-bottom: 1px solid ${palette.gray[3]};
  background: #fff;

  .navbar {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    height: 40px;
  }

  .left_menu {
    margin-left: auto;
  }
`;

export default Navbar;
