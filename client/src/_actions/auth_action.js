import axios from 'axios';
import { AUTH_CHECK } from './types';

export const authCheck = () => {
  const request = axios.get(`/api/users/auth`).then((res) => res.data);

  return {
    type: AUTH_CHECK,
    payload: request,
  };
};
