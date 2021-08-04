import create from 'zustand';
import dayjs from 'dayjs';

import {
  getDataObj,
  storeDataObj,
  removeDataObj,
} from '../../utils/asyncStorage';
import { login, signUp } from '../../api/auth';
import {
  USER_INFO_SESSION_STORAGE_FIELD,
  TOKEN_SESSION_STORAGE_FIELD,
} from '../../api/auth/constants';
import { clearCache } from '../../api/cache';

const cachedUserInfo = getDataObj(USER_INFO_SESSION_STORAGE_FIELD);
const cachedAccessToken = getDataObj(TOKEN_SESSION_STORAGE_FIELD);

const signedIn = Boolean(getDataObj(USER_INFO_SESSION_STORAGE_FIELD));

const initialState = {
  userInfo: cachedUserInfo ? cachedUserInfo : null,
  tokenInfo: cachedAccessToken ? cachedAccessToken : null,
  signedIn: signedIn,
  isLoading: false,
  loginTimeStamp: null,
};

export const useAuthStore = create((set, get) => ({
  ...initialState,
  login: async (email, password) => {
    const { signedIn } = get();
    if (!signedIn) {
      set({
        ...initialState,
        isLoading: true,
      });
      try {
        const result = await login(email, password);
        const data = result.data;
        if (data.statusCode === 0) {
          const userInfo = {
            email: data.email,
            userName: data.userName,
          };
          storeDataObj(USER_INFO_SESSION_STORAGE_FIELD, userInfo);
          set({
            userInfo,
            signedIn: true,
            loginTimeStamp: dayjs(),
            isLoading: false,
          });
          return null;
        } else {
          set({
            isLoading: false,
          });
          return data.errorMessage;
        }
      } catch (error) {
        set({ isLoading: false });
        throw new Error(error.message);
      }
    }
  },
  logout: async () => {
    try {
      removeDataObj(USER_INFO_SESSION_STORAGE_FIELD);
      clearCache();
    } catch {
      // Empty
    }
    set({ signedIn: false });
  },
  signUp: async (userName, email, password) => {
    const response = await signUp(userName, email, password);
    const status = response.status;
    switch (status) {
      case 200:
        return {
          status: 'success',
          message: 'You have successfully registered your account!',
          data: {
            userName,
          },
        };
      case 401:
      // FALLTHROUGH
      case 403:
        return {
          status: 'info',
          message: 'You are not allowed to sign up. Please contact admin.',
          data: {
            // Empty
          },
        };
      default:
        return {
          status: 'error',
          message:
            'You may have already created an account with same credentials. Please try again later or contact admin.',
          data: {
            // Empty
          },
        };
    }
  },
}));
