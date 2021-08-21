import create from 'zustand';
import {updateProfile, getUserInfo} from '../../api/profile'
import { clearCache } from '../../api/cache';
import { storeDataObj, getDataObj, removeDataObj } from '../../utils/asyncStorage';
import {USER_INFO_SESSION_STORAGE_FIELD} from '../../api/auth/constants'
import { useAuthStore } from '../auth';
const initialState = {
    isLoading: false,
};

export const useProfileStore = create((set, get) => ({
    ...initialState,
    fetchUserInfo: async userId => {
        try {
            const response = await getUserInfo(userId);
            const status = response.status;
            const data = response.data;
            return data;
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    updateUseInfo: async (email, userId, userName) => {
        const result = await updateProfile(email, userId, userName, "123456");
        const status = result.status;
        const data = result.data;
        switch (status) {
            case 200: {
                    const updatedUserInfo = {
                        email: data.email,
                        userName: data.userName,
                        userId: userId,
                    };
                    // await removeDataObj(USER_INFO_SESSION_STORAGE_FIELD);
                    // await clearCache();
                    await storeDataObj(USER_INFO_SESSION_STORAGE_FIELD, updatedUserInfo);
                return {
                    status: 'success',
                    message: 'You have successfully changed your profile information!',
                    data: {
                        userName,
                    },
                };
            }
            case 401: // FALLTHROUGH 
            case 403:
                return {
                    status: 'info',
                    message: 'You are not allowed to change your profile. Please contact admin.',
                    data: {
                    // Empty
                    },
                };
            default:
                return {
                    status: 'error',
                    message:'404 Not Found',
                    data: {
                    // Empty
                    },
                };
        }
    },
}))