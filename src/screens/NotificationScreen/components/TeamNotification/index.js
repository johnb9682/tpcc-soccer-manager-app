import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import dayjs from 'dayjs';
import { styles } from './style';
import { dateFormat } from '../../../../components/constants';
import { THEME_COLORS } from '../../../../components/theme';
import { mockEventInfo, mockTeamInfo } from '../../../../shared/zustand/event/mockData';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
    
const TeamNotification = () => {
  return (
    <TouchableOpacity style={styles.eventItem}>
      <View style={styles.header}>
        <View style={styles.infoPair}>
          <MaterialCommunityIcon
            name="account-multiple"
            size={18}
            color={THEME_COLORS.BLACK}
            style={styles.icon}
          />

          <Text numberOfLines={1} style={styles.title}>
            {mockTeamInfo[0].teamName}
          </Text>
        </View>
        <View style={styles.infoPair}>
          <Icon
            name="check-bold"
            size={18}
            color={THEME_COLORS.GREEN}
            style={styles.check}
          />
          <Icon
            name="close-thick"
            size={18}
            color={THEME_COLORS.DEFAULT_RED_PRIMARY}
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
            {dayjs(mockEventInfo[0].invitationTime).format(dateFormat)}
          </Text>
        </View>
        <View style={styles.infoPair}>
          <FontAwesome5
            name="user-alt"
            size={12}
            color={THEME_COLORS.DEFAULT_INFO_TEXT}
            style={styles.icon}
          />
          <Text numberOfLines={1} style={styles.textValue}>
            {mockTeamInfo[0].senderName}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TeamNotification;