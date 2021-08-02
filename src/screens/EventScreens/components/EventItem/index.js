import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './style';
import { dateFormat } from '../../../../components/constants';
import { THEME_COLORS } from '../../../../components/theme';

const EventItem = ({ event }) => {
  return (
    <TouchableOpacity style={styles.eventItem}>
      <View style={styles.header}>
        <Text style={styles.title}>{event.eventName}</Text>
        <View style={styles.infoPair}>
          <Text style={[styles.textValue, styles.timeText]}>
            {event.eventTime.format(dateFormat)}
          </Text>
          <Icon
            name="clock-time-eight-outline"
            size={14}
            color={THEME_COLORS.DEFAULT_BLUE_SECONDARY}
          />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.infoPair}>
          <Text style={styles.label}>Location</Text>
          <Text style={styles.textValue}>{event.eventLocation}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default EventItem;
