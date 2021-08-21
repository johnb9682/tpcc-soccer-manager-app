import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { Avartar } from '../../../../components';
import { THEME_FONT_SIZES } from '../../../../components/theme';

const TeamItem = ({
  showSeparator = true,
  userData,
  navigation,
  onPress,
  isLeader,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <View style={styles.avatar}>
          <Avartar
            width={50}
            height={50}
            type="circle"
            content={userData.userName ? userData.userName[0] : ''}
            fontSize={THEME_FONT_SIZES.AVATAR_FONT_SMALL}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {userData.userName}
          </Text>
          <Text numberOfLines={1} style={styles.email}>
            {userData.email}
          </Text>
        </View>
        <View style={styles.leaderLabelContainer}>
          {isLeader && (
            <Text numberOfLines={1} style={styles.leaderLabel}>
              Team Leader
            </Text>
          )}
        </View>
      </View>
      {showSeparator && <View style={styles.separator} />}
    </TouchableOpacity>
  );
};

export default TeamItem;
