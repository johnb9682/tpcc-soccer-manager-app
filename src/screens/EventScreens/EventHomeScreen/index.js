import * as React from 'react';
import {
  View,
  ScrollView,
  Text,
  SafeAreaView,
  RefreshControl,
} from 'react-native';
import dayjs from 'dayjs';
import { BlurView } from 'expo-blur';

import { styles } from './style';
import { Button, Info, SearchInput } from '../../../components';
import EventSection from '../components/EventSection';
import { useEventStore } from '../../../shared/zustand/event';
import { todayFormat } from '../../../components/constants';
import { EVENT_TYPE } from '../components/constants';

const EventHomeScreen = ({ navigation }) => {
  const {
    isLoading,
    upComingEvents,
    onGoingEvents,
    historyEvents,
    fetchUserEvents,
  } = useEventStore();

  const [searchStr, setSearchStr] = React.useState('');
  const [filteredOngoingEvents, setFilteredOngoingEvents] = React.useState([]);
  const [filteredUpcomingEvents, setFilteredUpcomingEvents] = React.useState(
    []
  );
  const [filteredHistoryEvents, setFilteredHistoryEvents] = React.useState([]);

  const handleOnSearch = React.useCallback(
    searchValue => {
      const lowercaseSearchValue = searchValue.toLowerCase();
      const updatedOngoingEvents = onGoingEvents.filter(event =>
        event.eventName.toLowerCase().includes(lowercaseSearchValue)
      );
      const updatedUpcomingEvents = upComingEvents.filter(event =>
        event.eventName.toLowerCase().includes(lowercaseSearchValue)
      );
      const updatedHistoryEvents = historyEvents.filter(event =>
        event.eventName.toLowerCase().includes(lowercaseSearchValue)
      );
      setFilteredOngoingEvents(updatedOngoingEvents);
      setFilteredUpcomingEvents(updatedUpcomingEvents);
      setFilteredHistoryEvents(updatedHistoryEvents);
    },
    [
      onGoingEvents,
      historyEvents,
      upComingEvents,
      setFilteredOngoingEvents,
      setFilteredUpcomingEvents,
      setFilteredHistoryEvents,
    ]
  );

  const handleOnRefresh = React.useCallback(() => {
    fetchUserEvents();
  }, []);

  const totalEventNum = React.useMemo(() => {
    return upComingEvents.length + onGoingEvents.length + historyEvents.length;
  }, [upComingEvents, onGoingEvents, historyEvents]);

  const today = React.useMemo(() => {
    return dayjs().format(todayFormat).toUpperCase();
  });

  React.useEffect(() => {
    fetchUserEvents();
  }, []);

  React.useEffect(() => {
    // initialization
    setFilteredOngoingEvents(onGoingEvents);
    setFilteredUpcomingEvents(upComingEvents);
    setFilteredHistoryEvents(historyEvents);
  }, [onGoingEvents, upComingEvents, historyEvents]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleOnRefresh} />
        }
      >
        <View style={styles.innerContainer}>
          <View style={styles.searchContainer}>
            <SearchInput
              width="94%"
              placeholder="Search"
              value={searchStr}
              onInput={setSearchStr}
              onSearch={handleOnSearch}
            />
          </View>
          <View style={styles.todayContainer}>
            <Text style={styles.todayText}>{today}</Text>
          </View>
          <EventSection
            title="Ongoing"
            noDataMessage="No Ongoing Events"
            eventData={filteredOngoingEvents}
            eventType={EVENT_TYPE.ONGOING}
          />
          <EventSection
            title="Upcoming"
            noDataMessage="No Upcoming Events"
            eventData={filteredUpcomingEvents}
            eventType={EVENT_TYPE.UPCOMING}
          />
          <EventSection
            title="History"
            noDataMessage="No History Events"
            eventData={filteredHistoryEvents}
            eventType={EVENT_TYPE.HISTORY}
          />

          {totalEventNum === 0 && (
            <View style={styles.infoContainer}>
              <Info>
                It seems like you don't have any events yet. Try join one or
                create your own event!
              </Info>
            </View>
          )}
        </View>
      </ScrollView>
      <BlurView intensity={100} style={styles.bottomContainer}>
        <Button borderWidth={0} height={50} onPress={() => {}}>
          <Text style={[styles.createButtonText, styles.buttonText]}>
            Create a New Event
          </Text>
        </Button>
      </BlurView>
    </SafeAreaView>
  );
};
export default EventHomeScreen;
