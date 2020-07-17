import { combineReducers } from 'redux';
import user from './user_reducer';
import register from './user_reducer';

const rootReducer = combineReducers({
  user,
  register,
});

export default rootReducer;
