import yelp from '../../../services/yelp';
export const login = async (email, password) => {
  const response = await yelp.post();
};

export const logout = () => {
  return 'Successfully logged out!';
};

export const signUp = async (userName, email, password) => {
  try {
    const response = await yelp.post(`/addUser`, {
      userName,
      email,
      password,
    });
    return response;
  } catch (err) {
    console.log(err);
    return { status: 500 };
  }
};
