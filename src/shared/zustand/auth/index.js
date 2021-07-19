import create from 'zustand';
import dayjs from 'dayjs';

import {
  getDataObj,
  storeDataObj,
  removeDataObj,
} from '../../utils/asyncStorage';
import { login, logout } from '../../api/auth/index';
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
      await logout();
      removeDataObj(USER_INFO_SESSION_STORAGE_FIELD);
      removeDataObj(TOKEN_SESSION_STORAGE_FIELD);
      clearCache();
    } catch {
      // Empty
    }
    set({ signedIn: false });
  },
}));
