import yelp from '../../../services/yelp';

export const searchUsers = async (name) => {
  try {
      const result = await yelp.get('/searchUser', {
        headers: { name, }
    });
    return result;
  } catch (err) {
    console.log(err);
    return { data: { statusCode: 500, errorMessage: 'Server Error' } };
  }
};
