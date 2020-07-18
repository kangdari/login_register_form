import { handleActions } from 'redux-actions';
import { AUTH_CHECK } from '../_actions/types';

const initialState = {
  auth: '',
};

const auth = handleActions(
  {
    [AUTH_CHECK]: (state, action) => ({
      ...state,
      auth: action.payload,
    }),
  },
  initialState
);

export default auth;
