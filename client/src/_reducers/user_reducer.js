import { LOGIN_USER, REGISTER_USER, CHECK_AUTH } from '../_actions/types';

export default (state = {}, action) => {
  // action의 type에 따라서 store의 state 업데이트
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };

    case REGISTER_USER:
      return { ...state, registerSuccess: action.payload };

    case CHECK_AUTH:
      return { ...state, userData: action.payload };

    default:
      return state;
  }
};
