import create from 'zustand';

import { mockUserTeams } from './mockData';

const initialState = {
  isLoading: false,
  userTeams: [],
};

export const useTeamStore = create((set, get) => ({
  ...initialState,
  fetchUserTeams: async userId => {
    set({ isLoading: true });
    // call fetch api using userId
    set({ userTeams: mockUserTeams, isLoading: false });
  },
}));
