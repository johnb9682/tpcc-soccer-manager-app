import * as React from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';

import { styles } from './style';
import { Button, Info } from '../../../components';
import EventSection from '../components/EventSection';
import { useEventStore } from '../../../shared/zustand/event';

const EventHomeScreen = ({ navigation }) => {
  const { upComingEvents, onGoingEvents, historyEvents, fetchUserEvents } =
    useEventStore();

  const totalEventNum = React.useMemo(() => {
    return upComingEvents.length + onGoingEvents.length + historyEvents.length;
  }, [upComingEvents, onGoingEvents, historyEvents]);

  React.useEffect(() => {
    fetchUserEvents();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <EventSection
          title="Ongoing"
          noDataMessage="No Ongoing Events"
          eventData={onGoingEvents}
        />
        <EventSection
          title="Upcoming"
          noDataMessage="No Upcoming Events"
          eventData={upComingEvents}
        />
        <EventSection
          title="History"
          noDataMessage="No History Events"
          eventData={historyEvents}
        />

        {totalEventNum === 0 && (
          <View style={styles.infoContainer}>
            <Info>
              It seems like you don't have any events yet. Try join one or
              create your own event!
            </Info>
          </View>
        )}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Button borderWidth={0} height={50} onPress={() => {}}>
          <Text style={[styles.createButtonText, styles.buttonText]}>
            Create a New Event
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default EventHomeScreen;
