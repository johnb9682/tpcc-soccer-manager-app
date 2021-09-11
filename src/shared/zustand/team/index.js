import create from 'zustand';

import { getUserTeam } from '../../api/team';

const initialState = {
  isLoading: false,
  userTeams: [],
  currentTeamInfo: {},
};

export const useTeamStore = create((set, get) => ({
  ...initialState,
  fetchUserTeams: async (userId) => {
    set({ isLoading: true });
    const result = await getUserTeam(userId);
    if (result) {
      set({ userTeams: result.data.teamResponses, isLoading: false });
    } else {
      set({ isLoading: false });
    }
  },
  fetchTeamInfo: async (teamId) => {
    set({ isLoading: true });
    // call fetch api using teamId
    set({ currentTeamInfo: {}, isLoading: false });
  },
}));
