import { fetchRaw } from '../fetch';
export const login = async (email, password) => {
  const result = await fetchRaw({
    url: '',
    method: 'POST',
    payload: {
      grant_type: 'password',
      email,
      password,
    },
    headers: undefined,
  });
  return 'result';
};

export const logout = () => {
  return '';
};
