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

export const getUserEventInvitation = async (userId) => {
  try {
    const result = await yelp.get('/getUserEventInvitation', {
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
