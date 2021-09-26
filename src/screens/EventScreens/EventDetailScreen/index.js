import * as React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import { styles } from './style';
import {
  Heading,
  RoundRectContainer,
  NoData,
  Button,
} from '../../../components';
import dayjs from 'dayjs';
import { eventDetailDateFormat } from '../../../components/constants';
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
            Event Name
          </Heading>
          <RoundRectContainer
            minHeight={40}
            paddingTop={10}
            paddingBottom={10}
            borderRadius={15}
            justifyContent='flex-start'
          >
            <Text style={styles.description}>
              {route.params.eventName}
            </Text>
          </RoundRectContainer>
          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Event Location
          </Heading>
          <RoundRectContainer
            minHeight={40}
            paddingTop={10}
            paddingBottom={10}
            borderRadius={15}
            justifyContent='flex-start'
          >
            <Text style={styles.description}>
              {route.params.eventLocation}
            </Text>
          </RoundRectContainer>
          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Event Time
          </Heading>
          <RoundRectContainer
            minHeight={40}
            paddingTop={10}
            paddingBottom={10}
            borderRadius={15}
            justifyContent='flex-start'
          >
            <Text style={styles.description}>
              {dayjs(route.params.eventStartTime).format(eventDetailDateFormat) + "  to  " + dayjs(route.params.eventEndTime).format(eventDetailDateFormat)}
            </Text>
          </RoundRectContainer>
          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Event Description
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
          {/* userId == hostId ? : */}
          {1 == hostId &&
            <Button
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.WHITE}
            width='90%'
            onPress={() => {
              navigation.navigate({
                name: 'EventInvite',
                params: { ...route.params, participants },
              });
            }}
            >
            <Text style={[styles.buttonText, styles.inviteButton]}>Invite</Text>
            </Button>
          }

          <View style={styles.leaveButtonContainer}>
            <Button
              buttonColor={THEME_COLORS.WHITE}
              borderColor={THEME_COLORS.WHITE}
              width='90%'
              onPress={() => {
                navigation.navigate('EventHome');
              }}
            >
              <Text style={[styles.buttonText, styles.leaveButton]}>
                Leave Event
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetailScreen;
