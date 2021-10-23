import create from 'zustand';
import { searchUsers } from '../../api/search';
const initialState = {
  isLoading: false,
};

export const useSearchStore = create((set, get) => ({
  ...initialState,
  fetchSearchedUsers: async (name) => {
    try {
        set({ isLoading: true });
        const response = await searchUsers(name);
        const data = response.data;
        set({ isLoading: false });
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
  },
}));
