import create from 'zustand';
import dayjs from 'dayjs';

import {
  getDataObj,
  storeDataObj,
  removeDataObj,
} from '../../utils/asyncStorage';
import { login, logout, signUp } from '../../api/auth/index';
import {
  USER_INFO_SESSION_STORAGE_FIELD,
  TOKEN_SESSION_STORAGE_FIELD,
} from '../../api/auth/constants';
import { clearCache } from '../../api/cache';
import { mockLoginResult } from './mockData';

const cachedUserInfo = getDataObj(USER_INFO_SESSION_STORAGE_FIELD);
const cachedAccessToken = getDataObj(TOKEN_SESSION_STORAGE_FIELD);

const signedIn = Boolean(
  getDataObj(TOKEN_SESSION_STORAGE_FIELD) &&
    getDataObj(USER_INFO_SESSION_STORAGE_FIELD)
);

const initialState = {
  userInfo: cachedUserInfo ? cachedUserInfo : null,
  tokenInfo: cachedAccessToken ? cachedAccessToken : null,
  signedIn: false,
  isLoading: false,
  loginTimeStamp: null,
};

export const useAuthStore = create((set, get) => ({
  ...initialState,
  login: async (email, password) => {
    const { signedIn, tokenInfo, userInfo } = get();
    if (!signedIn) {
      set({
        ...initialState,
        isLoading: true,
      });
      try {
        const result = mockLoginResult;
        // const result = await login(email, password);
        // if (result) {
        const userInfo = result.userInfo;
        const tokenInfo = {
          accessToken: result.access_token,
          refreshToken: result.refreshToken,
        };
        storeDataObj(USER_INFO_SESSION_STORAGE_FIELD, userInfo);
        storeDataObj(TOKEN_SESSION_STORAGE_FIELD, tokenInfo.accessToken);
        // }
        set({
          userInfo,
          tokenInfo,
          signedIn: true,
          isLoading: false,
          loginTimeStamp: dayjs(),
        });
      } catch (error) {
        set({ isLoading: false });
        throw new Error(error.message);
      }
    }
  },
  logout: async () => {
    try {
      const message = logout();
      console.log(message);
      removeDataObj(USER_INFO_SESSION_STORAGE_FIELD);
      removeDataObj(TOKEN_SESSION_STORAGE_FIELD);
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
