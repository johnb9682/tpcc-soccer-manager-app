import create from 'zustand';

import {
  getUserTeam,
  createTeam,
  deleteTeam,
  getTeamMembers,
  deleteTeamMember,
} from '../../api/team';

const initialState = {
  isLoading: false,
  userTeams: [],
  currentTeamMembers: [],
  errorMessage: null,
};

export const useTeamStore = create((set, get) => ({
  ...initialState,
  fetchUserTeams: async (userId) => {
    set({ isLoading: true });

    const result = await getUserTeam(userId);
    if (result) {
      const { errorMessage } = get();
      if (errorMessage) {
        set({ errorMessage: null });
      }
      set({ userTeams: result.data.teamResponses });
    } else {
      set({ errorMessage: result });
    }

    set({ isLoading: false });
  },
  createTeam: async (leaderId, teamName, teamDescription) => {
    const result = await createTeam(leaderId, teamName, teamDescription);
  },
  deleteTeam: async (teamId) => {
    const errorMessage = await deleteTeam(teamId);
    if (errorMessage) {
      set({ errorMessage });
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
    console.log(userId, teamId);
    const errorMessage = await deleteTeamMember(userId, teamId);
    if (errorMessage) {
      set({ errorMessage });
    }
  },
}));
