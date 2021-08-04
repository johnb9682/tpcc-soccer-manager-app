import create from 'zustand';

import { mockUser } from './mockData';

const initialState = {
    isLoading: false,
    userEmail: "ericding0110@gmail.com",
    userName: "NicedeEric",
};

export const useProfileStore = create((set, get) => ({
    ...initialState,
    fetchUserInfo: async userId => {
        set({ isLoading: true });
        // call fetchUserInfo api using userId
        // get userName, userEmail and avatarUri
        set({
            userEmail: mockUser['email'],
            userName: mockUser['username'],
        });
        set({ isLoading: false });
    },
    updateUseInfo: async (userId, userEmail, userName) => {
        set({
            userEmail: userEmail,
            userName: userName,
        })
    },
}))