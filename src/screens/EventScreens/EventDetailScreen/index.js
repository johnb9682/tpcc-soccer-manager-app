import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  Button as NativeButton,
} from 'react-native';

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
import { useAuthStore } from '../../../shared/zustand/auth';
import EventMemberItem from '../components/EventMemberItem';
import Toast from 'react-native-toast-message';
import { TOAST_UP_OFFSET } from '../../../components/constants';


const EventDetailScreen = ({ navigation, route }) => {
  const { isLoading, fetchEventUserInfo ,currentEventUserInfo, cancelEvent } = useEventStore();
  const { userInfo } = useAuthStore();
  const [eventName, setEventName] = React.useState(route.params.eventName);
  const [eventLocation, setEventLocation] = React.useState(route.params.eventLocation);
  const [eventDescription, setEventDescription] = React.useState(route.params.eventDescription);
  const [eventStartTime, setEventStartTime] = React.useState(route.params.eventStartTime);
  const [eventEndTime, setEventEndTime] = React.useState(route.params.eventEndTime);
  const [isEditing, setIsEditing] = React.useState(false);
  React.useEffect(() => {
    fetchEventUserInfo(route.params.eventId);
  }, []);

  const hostId = React.useMemo(() => {
    return route.params.hostId ?? null;
  }, [currentEventUserInfo]);

  const participants = React.useMemo(() => {
    return currentEventUserInfo.participants ?? [];
  }, [currentEventUserInfo]);

  const confirmCancelEvent = async () => {
    const result = await cancelEvent(route.params.eventId);
    if (result) {
      Toast.show({
        type: 'error',
        text1: 'Oops, something went wrong',
        text2: "You can't cancel this event, if you have any questiosn please contact the admin.",
        topOffset: TOAST_UP_OFFSET,
      });
    }
    else {
      Toast.show({
        type: 'success',
        text2: "You have cancelde a event successfully",
        topOffset: TOAST_UP_OFFSET,
      })
    }
    navigation.navigate('EventHome');
  };
  const handleOnPressCancel = () =>
    Alert.alert(
      'Are you sure you want to cancel the event?',
      'This operation can NOT be undone',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress: confirmCancelEvent },
      ]
    );
  const confirmQuitEvent = async () => {
    const result = await cancelEvent(route.params.eventId);
    if (result) {
      Toast.show({
        type: 'error',
        text1: 'Oops, something went wrong',
        text2: "You can't quit this event, if you have any questiosn please contact the admin.",
        topOffset: TOAST_UP_OFFSET,
      });
    }
    else {
      Toast.show({
        type: 'success',
        text2: "You have quit the event " + route.params.eventName + " successfully",
        topOffset: TOAST_UP_OFFSET,
      })
    }
    navigation.navigate('EventHome');
  };
  const handleOnPressQuit = () =>
  Alert.alert(
    'Are you sure you want to quit this event?',
    'This operation can NOT be undone',
    [
      {
        text: 'No',
        style: 'cancel',
      },
      { text: 'Yes', onPress: confirmQuitEvent },
    ]
  );
  React.useLayoutEffect(() => {
    if (hostId === userInfo.userId) {
      navigation.setOptions({
        headerRight: () => (
          <NativeButton
            color={
              isEditing
                ? THEME_COLORS.DEFAULT_BLUE_PRIMARY
                : THEME_COLORS.DANGER_COLOR
            }
            onPress={() => setIsEditing(!isEditing)}
            title={isEditing ? 'Save' : 'Edit'}
          />
        ),
      });
    }
  }, [navigation, hostId, userInfo, isEditing, setIsEditing]);
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
              {eventName}
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
              {eventLocation}
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
              {dayjs(eventStartTime).format(eventDetailDateFormat) + "  to  " + dayjs(eventEndTime).format(eventDetailDateFormat)}
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
              {eventDescription}
            </Text>
            {!route.params.eventDescription && (
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
          {userInfo.userId === hostId &&
            <View>
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
            <Text style={[styles.buttonText, styles.inviteButton]}>Invite new participants</Text>
            </Button>
            <Button
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.WHITE}
            width='90%'
            onPress={handleOnPressCancel}
            >
            <Text style={[styles.buttonText, styles.cancelButton]}>Cancel Event</Text>
            </Button>
            </View>
          }

          <View style={styles.leaveButtonContainer}>
            <Button
              buttonColor={THEME_COLORS.DANGER_COLOR}
              borderColor={THEME_COLORS.DANGER_COLOR}
              width='90%'
              onPress={handleOnPressQuit}
            >
              <Text style={[styles.buttonText]}>
                Quit this Event
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetailScreen;
