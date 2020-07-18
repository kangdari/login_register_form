import axios from 'axios';
import { LOGIN_USER, REGISTER_USER, CHECK_AUTH } from './types';

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

export const checkAuth = () => {
  const req = axios.get('/api/users/auth').then((res) => res.data);

  return {
    type: CHECK_AUTH,
    payload: req, // === action.payload
  };
};
