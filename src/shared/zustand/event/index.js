import create from 'zustand';
import { createEvent, getUserEvent } from '../../api/event';
import dayjs from 'dayjs';
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
    try {
      const response = await getUserEvent(userId);
      const data = response.data;
      const eventLists = data.eventResponses;
      const fetchedUpcomingEvents = [];
      const fetchedHistoryEvents = [];
      const fetchedOngoingEvents = [];
      const todayUnix = dayjs().valueOf();
      for (let i = 0; i < eventLists.length; i++) {
        const currentEvent = eventLists[i];
        if (todayUnix < currentEvent.eventStartTime) {
          fetchedUpcomingEvents.push(currentEvent);
        }
        else if (todayUnix >= currentEvent.eventStartTime && todayUnix < currentEvent.eventEndTime) {
          fetchedOngoingEvents.push(currentEvent);
        }
        else {
          fetchedHistoryEvents.push(currentEvent);
        }
      }
      set({
        upComingEvents: fetchedUpcomingEvents,
        historyEvents: fetchedHistoryEvents,
        onGoingEvents: fetchedOngoingEvents,
      });
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
