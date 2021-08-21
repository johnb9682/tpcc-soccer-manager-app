import create from 'zustand';

import { mockUserTeams, mockTeamInfo } from './mockData';

const initialState = {
  isLoading: false,
  userTeams: [],
  currentTeamInfo: {},
};

export const useTeamStore = create((set, get) => ({
  ...initialState,
  fetchUserTeams: async userId => {
    set({ isLoading: true });
    // call fetch api using userId
    set({ userTeams: mockUserTeams, isLoading: false });
  },
  fetchTeamInfo: async teamId => {
    set({ isLoading: true });
    // call fetch api using teamId
    set({ currentTeamInfo: mockTeamInfo, isLoading: false });
  },
}));
