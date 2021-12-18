import create from 'zustand';

import {
  getUserTeam,
  createTeam,
  deleteTeam,
  getTeamInfo,
  updateTeam,
  getTeamMembers,
  deleteTeamMember,
  inviteTeamMember,
} from '../../api/team';

const initialState = {
  isLoading: false,
  userTeams: [],
  currentTeamMembers: [],
  currentTeamInfo: {
    teamId: null,
    leaderId: null,
    teamName: '',
    teamDescription: '',
  },
};

export const useTeamStore = create((set, get) => ({
  ...initialState,
  fetchUserTeams: async (userId) => {
    set({ isLoading: true });

    const result = await getUserTeam(userId);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return result;
    } else {
      set({ userTeams: result.data.teamResponses });
    }
  },
  createTeam: async (leaderId, teamName, teamDescription) => {
    const result = await createTeam(leaderId, teamName, teamDescription);
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      if (result.status === 200) {
        return {
          type: 'success',
          message: 'Successfully created a new team!',
        };
      } else {
        return { type: 'error', message: result.statusText };
      }
    }
  },
  deleteTeam: async (teamId) => {
    const result = await deleteTeam(teamId);
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      return {
        type: 'success',
        message: 'Successfully deleted a team!',
      };
    }
  },
  fetchTeamInfo: async (teamId) => {
    set({ isLoading: true });
    const result = await getTeamInfo(teamId);
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      set({ currentTeamInfo: result.data });
    }
  },
  updateTeamInfo: async (teamId, leaderId, newTeamName, newTeamDescription) => {
    set({ isLoading: true });
    const result = await updateTeam(
      teamId,
      leaderId,
      newTeamName,
      newTeamDescription
    );
    set({ isLoading: false });
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      set({ currentTeamInfo: result.data });
      return {
        type: 'success',
        message: 'Successfully updated team information!',
      };
    }
  },
  fetchTeamMembers: async (teamId) => {
    set({ isLoading: true });

    const result = await getTeamMembers(teamId);
    if (result) {
      set({ currentTeamMembers: result.data.userResponses });
    }

    set({ isLoading: false });
  },
  deleteTeamMember: async (userId, teamId) => {
    const result = await deleteTeamMember(userId, teamId);
    if (typeof result === 'string') {
      return { type: 'error', message: result };
    } else {
      if (result.status === 200) {
        return {
          type: 'success',
          message: 'Successfully deleted a team member!',
        };
      } else {
        return { type: 'error', message: result.statusText };
      }
    }
  },
  inviteTeamMember: async (leaderId, receiverIds, teamId) => {
    set({ isLoading: true });
    const result = await inviteTeamMember(leaderId, receiverIds, teamId);
    if (typeof result === 'string') {
      set({ isLoading: false });
      return { type: 'error', message: result };
    } else {
      set({ isLoading: false });
      if (result.status === 200) {
        return { type: 'success', message: 'Successfully sent invitations!' };
      } else {
        return { type: 'error', message: result.statusText };
      }
    }
  },
}));
