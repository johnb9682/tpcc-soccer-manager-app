import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './style';
import { Avartar } from '../../../../components';
import { THEME_COLORS } from '../../../../components/theme';

const TeamItem = ({ showSeparator = true, teamName, navigation }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.avatar}>
          <Avartar
            width={50}
            height={50}
            type="roundedRect"
            content={teamName ? teamName[0] : ''}
            fontSize={28}
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
