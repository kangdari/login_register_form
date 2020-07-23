import React from 'react';
import Button from '../../Common/Button';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../_actions/user_action';

const RightMenu = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);

  const onLogout = () => {
    dispatch(logout());
  };

  if (!userData.isAuth) {
    return (
      <>
        <Button to='/register'>Register</Button>
        <Button to='/login'>Login</Button>
      </>
    );
  } else {
    return (
      <>
        <Button onClick={onLogout}>Logout</Button>
      </>
    );
  }
};

export default RightMenu;
