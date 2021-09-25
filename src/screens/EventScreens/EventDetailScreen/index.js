import * as React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import { styles } from './style';
import {
  Heading,
  RoundRectContainer,
  NoData,
  Button,
  Avartar,
} from '../../../components';
import { THEME_FONT_SIZES, THEME_COLORS } from '../../../components/theme';
import { useEventStore } from '../../../shared/zustand/event';
import EventMemberItem from '../components/EventMemberItem';


const EventDetailScreen = ({ navigation, route }) => {
  const { isLoading, currentEventInfo } = useEventStore();

  // React.useEffect(() => {
  //   fetchEventInfo();
  // }, []);

  const hostId = React.useMemo(() => {
    return currentEventInfo.hostId ?? null;
  }, [currentEventInfo]);

  const participants = React.useMemo(() => {
    return currentEventInfo.participants ?? [];
  }, [currentEventInfo]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
      >
        <View>
          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Event Detail
          </Heading>
          <RoundRectContainer
            minHeight={100}
            paddingTop={10}
            paddingBottom={10}
            borderRadius={15}
            justifyContent='flex-start'
          >
            <Text style={styles.description}>
              {route.params.eventDescriptioncription}
            </Text>
            {!route.params.eventDescriptioncription && (
              <NoData message={'No Description'} />
            )}
          </RoundRectContainer>
          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Event Participants
          </Heading>
          <RoundRectContainer
            borderRadius={15}
            paddingHorizontal={5}
            justifyContent='flex-start'
          >
            {participants.map((member, index) => {
              return (
                <EventMemberItem
                  key={member.userId}
                  userData={member}
                  showSeparator={
                    participants.length > 1 && index !== participants.length - 1
                  }
                  isLeader={member.userId === hostId}
                />
              );
            })}
          </RoundRectContainer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetailScreen;
