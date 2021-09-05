import yelp from '../../../services/yelp';

export const login = async (email, password) => {
  try {
    const result = await yelp.post('/verifyLoginUser', {
      email,
      password,
    });
    return result;
  } catch (err) {
    console.log(err);
    return { data: { statusCode: 500, errorMessage: 'Server Error' } };
  }
};

export const signUp = async (userName, email, password) => {
  try {
    const response = await yelp.post('/addUser', {
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
