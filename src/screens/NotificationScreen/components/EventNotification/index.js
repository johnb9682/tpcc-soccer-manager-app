import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';
import { styles } from './style';
import { dateFormat } from '../../../../components/constants';
import { THEME_COLORS } from '../../../../components/theme';
import { mockEventInfo, mockTeamInfo } from '../../../../shared/zustand/event/mockData';
    
const EventNotification = ({ event, eventType, onPress }) => {
  return (
    <TouchableOpacity style={styles.eventItem} onPress={() => {
      const eventId = event['eventId'];
      onPress(eventId);
    }}>
      <View style={styles.header}>
        <View style={styles.infoPair}>
          <Icon
            name="calendar-clock"
            size={18}
            color={THEME_COLORS.BLACK}
            style={styles.icon}
          />

          <Text numberOfLines={1} style={styles.title}>
            {mockEventInfo[0].eventName}
          </Text>
        </View>
        <View style={styles.infoPair}>
          <Icon
            name="check-bold"
            size={18}
            color={"#008000"}
            style={styles.check}
          />
          <Icon
            name="close-thick"
            size={18}
            color={"#800000"}
            style={styles.close}
          />
        </View>

      </View>
      <View style={styles.body}>
        <View style={styles.infoPair}>
          <Icon
            name="clock-time-four-outline"
            size={14}
            color={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            style={styles.icon}
          />
          <Text
            numberOfLines={1}
            style={[styles.timeText, { color: THEME_COLORS.DEFAULT_BLUE_PRIMARY }]}
          >
            {dayjs(mockEventInfo[0].eventStartTime).format(dateFormat)}
          </Text>
        </View>
        <View style={styles.infoPair}>
          <Icon
            name="map-marker-outline"
            size={16}
            color={THEME_COLORS.DEFAULT_INFO_TEXT}
            style={styles.icon}
          />
          <Text numberOfLines={1} style={styles.textValue}>
            {mockEventInfo[0].eventLocation}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};


export default EventNotification;
