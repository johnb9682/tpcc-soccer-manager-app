import create from 'zustand';
import { createEvent, fetchUserEvents } from '../../api/event';

import {
  mockHistoryEvents,
  mockOngoingEvents,
  mockUpcomingEvents,
  mockEventInfo,
} from './mockData';

const initialState = {
  isLoading: false,
  upComingEvents: [],
  onGoingEvents: [],
  historyEvents: [],
  currentEventInfo: {},
}

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
    try {
      const response = await fetchUserEvents(userId);
      const data = response.data;
      set({ isLoading: false });
      return data;
    } catch (error) {
      throw new Error(error.message);
    };
  },
  fetchEventInfo: async eventId => {
    set({ isLoading: true });
    set({ currentEventInfo: mockEventInfo })
    set({ isLoading: false });
  },
  createEvent: async eventInfoObj => {
    try {
      const response = await createEvent(eventInfoObj);
      const data = response.data;
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}));
