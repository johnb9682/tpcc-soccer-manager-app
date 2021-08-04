import create from 'zustand';

import {
  mockHistoryEvents,
  mockOngoingEvents,
  mockUpcomingEvents,
} from './mockData';

const initialState = {
  isLoading: false,
  upComingEvents: [],
  onGoingEvents: [],
  historyEvents: [],
};

export const useEventStore = create((set, get) => ({
  ...initialState,
  fetchUserEvents: async userId => {
    set({ isLoading: true });
    // call fetch api using userId
    // categorize based on dates
    set({
      upComingEvents: mockUpcomingEvents,
      historyEvents: mockHistoryEvents,
      onGoingEvents: mockOngoingEvents,
    });
    set({ isLoading: false });
  },
}));
