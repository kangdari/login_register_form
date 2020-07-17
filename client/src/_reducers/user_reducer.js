import { LOGIN_USER } from '../_actions/types';

export default (state = {}, action) => {
  // action의 type에 따라서 store의 state 업데이트
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    // break;

    default:
      return state;
  }
};
