import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const Landingpage = ({ history }) => {
  const onClickHandler = () => {
    axios.get('/api/users/logout').then((res) => {
      if (res.data.logoutSuccess) {
        history.push('/login');
      } else {
        alert('logout 실패');
      }
    });
  };

  return (
    <div>
      <h2>Landingpage</h2>
      <button onClick={onClickHandler}>로그아웃</button>
    </div>
  );
};

export default withRouter(Landingpage);
