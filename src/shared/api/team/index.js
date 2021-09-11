import yelp from '../../../services/yelp';

export const getUserTeam = async (userId) => {
  try {
    const response = await yelp.get('/getUserTeam', { headers: { userId } });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createTeam = async () => {};
