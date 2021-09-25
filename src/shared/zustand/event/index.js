import create from 'zustand';
import {createEvent} from '../../api/event'
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
  createEvent: async (eventRequest) => {
    try {
      const response = await createEvent(eventRequest);
      const data = response.data;
      return data;
    }
    catch (error) {
        throw new Error(error.message);
    }
  }
}));
