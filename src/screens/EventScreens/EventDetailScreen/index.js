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
  Input,
  DateInput,
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
  const { isLoading, fetchEventUserInfo ,currentEventUserInfo, cancelEvent, quitEvent, errorMessage, updateEvent } = useEventStore();
  const { userInfo } = useAuthStore();
  const [eventName, setEventName] = React.useState(route.params.eventName);
  const [eventLocation, setEventLocation] = React.useState(route.params.eventLocation);
  const [eventDescription, setEventDescription] = React.useState(route.params.eventDescription);
  const [eventStartTime, setEventStartTime] = React.useState(route.params.eventStartTime);
  const [eventEndTime, setEventEndTime] = React.useState(route.params.eventEndTime);
  const [isEditing, setIsEditing] = React.useState(false);
  const [warning, setWarning] = React.useState(false);
  React.useEffect(() => {
    fetchEventUserInfo(route.params.eventId);
  }, []);
  React.useEffect(() => {
    if (eventEndTime - eventStartTime <= 0) {
      setWarning(true);
    }
    else {
      setWarning(false);
    }
  })
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
    const result = await quitEvent(userInfo.userId, route.params.eventId);
    console.log(errorMessage);
    if (errorMessage) {
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
  const handleSave = React.useCallback(async () =>{
    const eventInfoObj = {
      "eventDescription": eventDescription,
      "eventEndTime": dayjs(eventEndTime).valueOf(),
      "eventLocation": eventLocation,
      "eventName": eventName,
      "eventStartTime": dayjs(eventStartTime).valueOf(),
      "hostId": userInfo['userId'],
      "id": route.params.eventId,
    };
    const result = await updateEvent(eventInfoObj);
  });
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
            disabled={false}
            onPress={()=>{
              if (isEditing) {
                handleSave();
              }
              setIsEditing(!isEditing);
            }}
            title={isEditing ? 'Save' : 'Edit'}
          />
        ),
      });
    }
  }, [navigation, hostId, userInfo, isEditing, setIsEditing, warning, handleSave]);
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
          {isEditing 
          ?
          <Input
            onInput={setEventName}
            value={eventName}
            backgroundColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
            borderColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
            width={"90%"}
            borderRadius={15}
            autoFocus={true}
            placeholder='Event Name'
          />
          :  
          <RoundRectContainer
            minHeight={40}
            paddingTop={10}
            paddingBottom={10}
            borderRadius={15}
            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            borderWidth={"1px"}
            backgroundColor={THEME_COLORS.WHITE}
            justifyContent='flex-start'
          >
            <Text style={styles.description}>
              {eventName}
            </Text>
          </RoundRectContainer>}

          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Event Location
          </Heading>
          {isEditing
          ?
          <Input
            onInput={setEventLocation}
            value={eventLocation}
            backgroundColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
            borderColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
            width={"90%"}
            borderRadius={15}
            placeholder='Event Location'
          />
          :
          <RoundRectContainer
            minHeight={40}
            paddingTop={10}
            paddingBottom={10}
            borderRadius={15}
            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            borderWidth={"1px"}
            backgroundColor={THEME_COLORS.WHITE}
            justifyContent='flex-start'
          >
            <Text style={styles.description}>
              {eventLocation}
            </Text>
          </RoundRectContainer>}
          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Event Time
          </Heading>
          {isEditing
          ?
          <View>
            <DateInput
              label="Event Start Date"
              value={new Date(eventStartTime)}
              onChange={setEventStartTime}
            />
            <DateInput
              label="Event End Date"
              value={new Date(eventEndTime)}
              onChange={setEventEndTime}
            />
            {warning && <Text style={styles.warningText}>
              The end date should be later than start date
            </Text>}
          </View>
          :
          <RoundRectContainer
            minHeight={40}
            paddingTop={10}
            paddingBottom={10}
            borderRadius={15}
            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            borderWidth={"1px"}
            backgroundColor={THEME_COLORS.WHITE}
            justifyContent='flex-start'
          >
            <Text style={styles.description}>
              {dayjs(eventStartTime).format(eventDetailDateFormat) + "  to  " + dayjs(eventEndTime).format(eventDetailDateFormat)}
            </Text>
          </RoundRectContainer>
          }

          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Event Description
          </Heading>
          {isEditing
          ?
          <Input
            value={eventDescription}
            placeholder="Event Description"
            height={300}
            multiline={true}
            onInput={setEventDescription}
            borderColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
            backgroundColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
            width={"90%"}
            borderRadius={15}
          />
          :
          <RoundRectContainer
            minHeight={100}
            paddingTop={10}
            paddingBottom={10}
            borderRadius={15}
            justifyContent='flex-start'
            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            borderWidth={"1px"}
            backgroundColor={THEME_COLORS.WHITE}
          >
            <Text style={styles.description}>
              {eventDescription}
            </Text>
            {!route.params.eventDescription && (
              <NoData message={'No Description'} />
            )}
        </RoundRectContainer>
          }

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
            disabled={isEditing?true:false}
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
            disabled={isEditing?true:false}
            >
            <Text style={[styles.buttonText, styles.cancelButton]}>Cancel Event</Text>
            </Button>
            </View>
          }

          {userInfo.userId !== hostId && 
          <View style={styles.leaveButtonContainer}>
          <Button
            buttonColor={THEME_COLORS.DANGER_COLOR}
            borderColor={THEME_COLORS.DANGER_COLOR}
            width='90%'
            onPress={handleOnPressQuit}
            disabled={isEditing?true:false}
          >
            <Text style={[styles.buttonText]}>
              Quit this Event
            </Text>
          </Button>
        </View>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventDetailScreen;
