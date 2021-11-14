import yelp from '../../../services/yelp';

export const getUserTeam = async (userId) => {
  try {
    const response = await yelp.get('/getUserTeam', { headers: { userId } });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const getTeamInfo = async (teamId) => {
  try {
    const response = await yelp.get('/team', { headers: { teamId } });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const createTeam = async (leaderId, teamName, teamDescription) => {
  try {
    const response = await yelp.post('/team', {
      leaderId,
      teamDescription,
      teamName,
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const deleteTeam = async (teamId) => {
  try {
    await yelp.delete('/team', {
      headers: { teamId },
    });
    return null;
  } catch (err) {
    return err.message;
  }
};

export const updateTeam = async (teamId) => {
  try {
    const response = await yelp.put('/team', {
      //
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const getTeamMembers = async (teamId) => {
  try {
    const response = await yelp.get('/teamMembers', { headers: { teamId } });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const deleteTeamMember = async (userId, teamId) => {
  try {
    const result = await yelp.delete('/teamMember', {
      headers: { userId, teamId },
    });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const inviteTeamMember = async (senderId, receiverIds, teamId) => {
  try {
    const result = await yelp.post('/addTeamInvitation', {
      senderId,
      receiverIds,
      teamId,
    });
    return result;
  } catch (err) {
    return err.message;
  }
};
