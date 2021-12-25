import create from 'zustand';

import {
  getEventInvitation,
  getUserReceiverEventInvitation,
  getUserSenderEventInvitation,
  deleteEventInvitation,
  addEventInvitation,
  respondEventInvitation,

  getTeamInvitation,
  getUserReceiverTeamInvitation,
  getUserSenderTeamInvitation,
  deleteTeamInvitation,
  addTeamInvitation,
  respondTeamInvitation,
} from '../../api/invitation';

const initialState = {
  isLoading: false,
  userEventInvitationsReceived: [],
  userEventInvitationsSent: [],
  userTeamInvitationsReceived: [],
  userTeamInvitationsSent: [],
};

export const useInvitationStore = create((set, get) => ({
  ...initialState,
  fetchEventInvitationInfo: async (invitationId) => {
    set({ isLoading: true });
    const result = await getEventInvitation(invitationId);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      return {
        type: 'success',
        message: `Successfully fetched the info 
          of event invitation of ID: ${invitationId}`,
      };
    }
  },
  fetchUserEventInvitation: async (userId) => {
    set({ isLoading: true });
    const result1 = await getUserReceiverEventInvitation(userId);
    const result2 = await getUserSenderEventInvitation(userId);
    set({ isLoading: false });
    if (typeof result1 === 'string') {
      return { type: 'error', message: result1 };
    } else if (typeof result2 === 'string') {
      return { type: 'error', message: result2 };
    } else {
      set({
        userEventInvitationsReceived: result1.data.invitationEventResponses,
        userEventInvitationsSent: result2.data.invitationEventResponses,
      });
      return {
        type: 'success',
        message: 'Successfully fetched all event invitations!',
      };
    }
  },
  deleteEventInvitation: async (invitationId) => {
    set({ isLoading: true });
    const result = await deleteEventInvitation(invitationId);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      return {
        type: 'success',
        message: `Successfully deleted event invitation! (ID: ${invitationId})`,
      };
    }
  },
  addEventInvitation: async (eventId, receiverIds, senderId) => {
    set({ isLoading: true });
    const result = await addEventInvitation(eventId, receiverIds, senderId);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      return {
        type: 'success',
        message: `Successfully sent a event invitation!`,
      };
    }
  },
  respondEventInvitation: async (invitationId, respondValue) => {
    set({ isLoading: true });
    const result = await respondEventInvitation(invitationId, respondValue);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      return {
        type: 'success',
        message: `You have responded the invitation!`,
      };
    }
  },

  fetchTeamInvitationInfo: async (invitationId) => {
    set({ isLoading: true });
    const result = await getTeamInvitation(invitationId);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      return {
        type: 'success',
        message: `Successfully fetched the info 
          of team invitation of ID: ${invitationId}`,
      };
    }
  },
  fetchUserTeamInvitation: async (userId) => {
    set({ isLoading: true });
    const result1 = await getUserReceiverTeamInvitation(userId);
    const result2 = await getUserSenderTeamInvitation(userId);
    set({ isLoading: false });
    if (typeof result1 === 'string') {
      return { type: 'error', message: result1 };
    } else if (typeof result2 === 'string') {
      return { type: 'error', message: result2 };
    } else {
      set({
        userTeamInvitationsReceived: result1.data.invitationTeamResponses,
        userTeamInvitationsSent: result2.data.invitationTeamResponses,
      });
      return {
        type: 'success',
        message: 'Successfully fetched all team invitations!',
      };
    }
  },
  deleteTeamInvitation: async (invitationId) => {
    set({ isLoading: true });
    const result = await deleteTeamInvitation(invitationId);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      return {
        type: 'success',
        message: `Successfully deleted team invitation! (ID: ${invitationId})`,
      };
    }
  },
  addTeamInvitation: async (teamId, receiverIds, senderId) => {
    set({ isLoading: true });
    const result = await addTeamInvitation(teamId, receiverIds, senderId);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      return {
        type: 'success',
        message: `Successfully sent a team invitation!`,
      };
    }
  },
  respondTeamInvitation: async (invitationId, respondValue) => {
    set({ isLoading: true });
    const result = await respondTeamInvitation(invitationId, respondValue);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      return {
        type: 'success',
        message: `You have responded the invitation!`,
      };
    }
  },
}));
