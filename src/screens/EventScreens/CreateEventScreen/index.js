import React, { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Input, Button, DateInput } from '../../../components';
import { styles } from './style';
import { THEME_COLORS } from '../../../components/theme';
import { useAuthStore } from '../../../shared/zustand/auth';
import { useEventStore } from '../../../shared/zustand/event';
import Toast from 'react-native-toast-message';
import { TOAST_UP_OFFSET } from '../../../components/constants';

const CreateEventScreen = ({ navigation }) => {
  const [warning, setWarning] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());
  const [eventLocation, setEventLocation] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [isCreateEnabled, setIsCreateEnabled] = useState(true);
  const { userInfo } = useAuthStore();
  const { createEvent } = useEventStore();
  function handleCancel() {
    setEventName('');
    setEventLocation('');
    setEventEndDate(new Date());
    setEventStartDate(new Date());
    setEventDescription('');
    navigation.navigate('EventHome');
  }
  const onPressCreate = useCallback(async () => {
    const eventInfoObj = {
      "eventDescription": eventDescription,
      "eventEndTime": dayjs(eventEndDate).valueOf(),
      "eventLocation": eventLocation,
      "eventName": eventName,
      "eventStartTime": dayjs(eventStartDate).valueOf(),
      "hostId": userInfo['userId'],
    }
    const result = await createEvent(eventInfoObj);
    if (result) {
      Toast.show({
        type: 'error',
        text1: 'Oops, something went wrong',
        text2:"You can't create a event, if you have any questiosn please contact the admin.",
        topOffset: TOAST_UP_OFFSET,
      });
    }
    else {
      Toast.show({
        type: 'success',
        text2: "You have created a event successfully",
        topOffset: TOAST_UP_OFFSET,
      })
    }
    navigation.navigate('EventHome');
  });
  useEffect(() => {
    if (eventName.length > 0 && eventEndDate - eventStartDate > 0) {
      setIsCreateEnabled(true);
    } else {
      setIsCreateEnabled(false);
    }
  })
  useEffect(() => {
    if (eventEndDate - eventStartDate <= 0) {
      setWarning(true);
    }
    else {
      setWarning(false);
    }
  })
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        style={styles.scrollContainer}
      >
        <View style={styles.innerContainer}>
          <View>
            <Input
              onInput={setEventName}
              value={eventName}
              placeholder="Event Name"
              autoFocus={true}
              height={70}
              borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
              backgroundColor={THEME_COLORS.WHITE}
            />
            <View>
              <DateInput
                label="Event Start Date"
                value={eventStartDate}
                onChange={setEventStartDate}
              />
              <DateInput
                label="Event End Date"
                value={eventEndDate}
                onChange={setEventEndDate}
              />
              {warning && <Text style={styles.warningText}>
                The end date should be later than start date
              </Text>}
            </View>
            <Input
              value={eventLocation}
              placeholder="Event Location"
              height={70}
              onInput={setEventLocation}
              borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
              backgroundColor={THEME_COLORS.WHITE}
            />
            <Input
              value={eventDescription}
              placeholder="Event Description"
              height={300}
              multiline={true}
              onInput={setEventDescription}
              borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
              backgroundColor={THEME_COLORS.WHITE}
            />
          </View>
          <View>
            <Button disabled={!isCreateEnabled} onPress={onPressCreate}>
              <Text style={styles.ButtonText}> Create</Text>
            </Button>
            <Button
              buttonColor={THEME_COLORS.WHITE}
              borderColor={THEME_COLORS.WHITE}
              onPress={handleCancel}
            >
              <Text style={styles.dangerButtonText}>Cancel</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateEventScreen;
