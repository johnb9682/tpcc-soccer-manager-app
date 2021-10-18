import create from 'zustand';
import { createEvent, getUserEvent, getEventUserInfo, cancelEvent, quitEvent } from '../../api/event';
import dayjs from 'dayjs';

const initialState = {
  isLoading: false,
  upComingEvents: [],
  onGoingEvents: [],
  historyEvents: [],
  currentEventUserInfo: {},
  errorMessage: null,
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
  fetchEventUserInfo: async eventId => {
    set({ isLoading: true });
    const response = await getEventUserInfo(eventId);
    if (response) {
      const userLists = response.data.userResponses;
      set({ currentEventUserInfo: { participants: userLists } });
    }
    set({ isLoading: false });
  },
  createEvent: async eventInfoObj => {
    set({ isLoading: true });
    const errorMessage = await createEvent(eventInfoObj);
    if (errorMessage) {
      set({ errorMessage });
    }
  },
  cancelEvent: async eventId => {
    const errorMessage = await cancelEvent(eventId);
    if (errorMessage) {
      set({ errorMessage });
    }
  },
  quitEvent: async (userId, eventId) => {
    // set({ errorMessage: "WE" });
    const errorMessage = await quitEvent(userId, eventId);
    if (typeof errorMessage === "string") {
      set({ errorMessage, });
    }
  },
}));
