import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './style';
import { Avartar } from '../../../../components';
import { THEME_COLORS, THEME_FONT_SIZES } from '../../../../components/theme';

const TeamItem = ({ showSeparator = true, teamName, navigation, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.innerContainer}>
        <View style={styles.avatar}>
          <Avartar
            width={60}
            height={60}
            type="circle"
            content={teamName ? teamName[0] : ''}
            fontSize={THEME_FONT_SIZES.AVATAR_FONT_MEDIUM}
          />
        </View>

        <View style={styles.infoRow}>
          <Text numberOfLines={1} style={styles.title}>
            {teamName}
          </Text>
          <Icon
            name="chevron-right"
            size={24}
            color={THEME_COLORS.DEFAULT_INFO_TEXT}
          />
        </View>
      </View>
      {showSeparator && <View style={styles.separator} />}
    </TouchableOpacity>
  );
};

export default TeamItem;
