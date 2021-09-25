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

export const getTeamInfo = async (teamId) => {
  try {
    const response = await yelp.get('/team', { headers: { teamId } });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const createTeam = async (leaderId, teamName, teamDescription) => {
  try {
    const response = await yelp.post('/team', {
      leaderId,
      teamDescription,
      teamName,
    });
    console.log(response.data);
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteTeam = async (teamId) => {
  try {
    const response = await yelp.delete('/team', {
      //
    });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateTeam = async (teamId) => {
  try {
    const response = await yelp.put('/team', {
      //
    });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const getTeamMembers = async (teamId) => {
  try {
    const response = await yelp.get('/team', { headers: { teamId } });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteTeamMember = async (teamId, userId) => {
  try {
    const response = await yelp.delete('/team', {
      //
    });
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
};
