import create from 'zustand';

import {
  getEventInvitation,
  getUserEventInvitation,
  deleteEventInvitation,
  addEventInvitation,
  respondEventInvitation,
} from '../../api/invitation';

const initialState = {
  isLoading: false,
  userEventInvitations: [],
  userTeamInvitations: [],
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
    const result = await getUserEventInvitation(userId);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      console.log(result.data);
      set({ userEventInvitations: result.data });
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
}));
