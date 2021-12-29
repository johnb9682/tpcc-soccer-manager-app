import yelp from '../../../services/yelp';

export const addEventInvitation = async (eventId, receiverIds, senderId) => {
  try {
    const response = await yelp.post('/addEventInvitation', {
      eventId,
      receiverIds,
      senderId,
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const deleteEventInvitation = async (invitationEventId) => {
  try {
    const result = await yelp.delete('/deleteEventInvitation', {
      headers: { invitationEventId },
    });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const getEventInvitation = async (invitationId) => {
  try {
    const result = await yelp.get('/getEventInvitation', {
      headers: { invitationId },
    });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const getUserReceiverEventInvitation = async (userId) => {
  try {
    const result = await yelp.get('/getUserReceiverEventInvitation', {
      headers: { userId },
    });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const getUserSenderEventInvitation = async (userId) => {
  try {
    const result = await yelp.get('/getUserSenderEventInvitation', {
      headers: { userId },
    });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const respondEventInvitation = async (invitationId, respondValue) => {
  try {
    const response = await yelp.put('/respondEventInvitation', {
      id: invitationId,
      respondValue,
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

// Follow the implementation of event invitation API functions
// Add API functions for team invitation below

export const addTeamInvitation = async (teamId, receiverIds, senderId) => {
  try {
    const response = await yelp.post('/addTeamInvitation', {
      teamId,
      receiverIds,
      senderId,
    });
    return response;
  } catch (err) {
    return err.message;
  }
};

export const deleteTeamInvitation = async (invitationTeamId) => {
  try {
    const result = await yelp.delete('/deleteTeamInvitation', {
      headers: { invitationTeamId },
    });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const getTeamInvitation = async (invitationId) => {
  try {
    const result = await yelp.get('/getTeamInvitation', {
      headers: { invitationId },
    });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const getUserReceiverTeamInvitation = async (userId) => {
  try {
    const result = await yelp.get('/getUserReceiverTeamInvitation', {
      headers: { userId },
    });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const getUserSenderTeamInvitation = async (userId) => {
  try {
    const result = await yelp.get('/getUserSenderTeamInvitation', {
      headers: { userId },
    });
    return result;
  } catch (err) {
    return err.message;
  }
};

export const respondTeamInvitation = async (invitationId, respondValue) => {
  try {
    const response = await yelp.put('/respondTeamInvitation', {
      id: invitationId,
      respondValue,
    });
    return response;
  } catch (err) {
    return err.message;
  }
};