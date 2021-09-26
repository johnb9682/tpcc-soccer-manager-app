import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';
import { styles } from './style';
import { dateFormat } from '../../../../components/constants';
import { THEME_COLORS } from '../../../../components/theme';
import { EVENT_TYPE } from '../constants';

const EventItem = ({ event, eventType, onPress }) => {
  const eventIcon = React.useMemo(() => {
    switch (eventType) {
      case EVENT_TYPE.ONGOING:
        return 'calendar-clock';
      case EVENT_TYPE.UPCOMING:
        return 'calendar-multiselect';
      case EVENT_TYPE.HISTORY:
        return 'calendar-check';
      default:
        return 'calendar-clock';
    }
  }, [eventType]);

  const eventColor = React.useMemo(() => {
    switch (eventType) {
      case EVENT_TYPE.ONGOING:
        return THEME_COLORS.DEFAULT_BLUE_SECONDARY;
      case EVENT_TYPE.UPCOMING:
        return THEME_COLORS.DEFAULT_RED_PRIMARY;
      case EVENT_TYPE.HISTORY:
        return THEME_COLORS.DEFAULT_YELLOW_PRIMARY;
      default:
        return THEME_COLORS.DEFAULT_BLUE_SECONDARY;
    }
  }, [eventType]);

  return (
    <TouchableOpacity style={styles.eventItem} onPress={() => {
      let eventId = event['id']
      onPress(eventId)
    }}>
      <View style={styles.header}>
        <View style={styles.infoPair}>
          <Icon
            name={eventIcon}
            size={18}
            color={THEME_COLORS.BLACK}
            style={styles.icon}
          />
          <Text numberOfLines={1} style={styles.title}>
            {event.eventName}
          </Text>
        </View>
        <Icon
          name="chevron-right"
          size={24}
          color={THEME_COLORS.DEFAULT_INFO_TEXT}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.infoPair}>
          <Icon
            name="clock-time-four-outline"
            size={14}
            color={eventColor}
            style={styles.icon}
          />
          <Text
            numberOfLines={1}
            style={[styles.timeText, { color: eventColor }]}
          >
            {dayjs(event.eventStartTime).format(dateFormat)}
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
            {event.eventLocation}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventItem;
