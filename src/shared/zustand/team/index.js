import create from 'zustand';

import {
  getUserTeam,
  createTeam,
  getTeamInfo,
  deleteTeam,
  getTeamMembers,
  deleteTeamMember,
} from '../../api/team';

const initialState = {
  isLoading: false,
  userTeams: [],
  currentTeamInfo: {},
  isNetworkError: false,
};

export const useTeamStore = create((set, get) => ({
  ...initialState,
  fetchUserTeams: async (userId) => {
    set({ isLoading: true });
    const result = await getUserTeam(userId);
    if (result) {
      set({ userTeams: result.data.teamResponses, isLoading: false });
    } else {
      set({ isNetworkError: true, isLoading: false });
    }
  },
  fetchTeamInfo: async (teamId) => {
    set({ isLoading: true });
    const result = await getTeamInfo(teamId);
    if (result) {
      set({ currentTeamInfo: result.data, isLoading: false });
    }
    set({ isLoading: false });
  },
  createTeam: async (leaderId, teamName, teamDescription) => {
    const result = await createTeam(leaderId, teamName, teamDescription);
  },
  deleteTeam: async (teamId) => {
    const result = await deleteTeam(teamId);
    console.log(result.data);
  },
  fetchTeamMembers: async (teamId) => {
    set({ isLoading: true });
    const result = await getTeamMembers(teamId);
    if (result) {
      //
      const { currentTeamInfo } = get();
      console.log(result.data);
      set({ currentTeamInfo: '', isLoading: false });
    }
    set({ isLoading: false });
  },
  deleteTeamMember: async (teamId, userId) => {
    const result = await deleteTeamMember(teamId);
    console.log(result.data);
  },
}));
