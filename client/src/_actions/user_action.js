import axios from 'axios';
import { LOGIN_USER, REGISTER_USER } from './types';

export const loginUser = (dataToSubmit) => {
  const req = axios.post('/api/users/login', dataToSubmit).then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: req, // === action.payload
  };
};

export const registerUser = (dataToSubmit) => {
  const req = axios.post('/api/users/register', dataToSubmit).then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: req, // === action.payload
  };
};
