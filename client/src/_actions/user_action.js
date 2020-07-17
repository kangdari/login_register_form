import axios from 'axios';
import { LOGIN_USER } from './types';

export const loginUser = (datatoSubmit) => {
  const req = axios.post('/api/users/login', datatoSubmit).then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: req, // === action.payload
  };
};
