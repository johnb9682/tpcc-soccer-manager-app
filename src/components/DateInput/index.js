import React from 'react';
import { View, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './style';
import { THEME_COLORS } from '../theme';

const DateInput = ({
    onChange,
    title,
    width = '60%',
    value = '',
    mode = 'datetime',
    is24Hour = true,
    display = 'default',
    borderWidth = 1,
    borderRadius = 10,
    borderColor = THEME_COLORS.WHITE,
    backgroundColor = THEME_COLORS.WHITE,
}) => {
  return (
    <View>
          <View style={[styles.container,{
              width: width,
              borderColor: borderColor,
              borderWidth: borderWidth,
              borderRadius: borderRadius,
              backgroundColor: backgroundColor,
      }]}>
        <Text>{title}</Text>
              <DateTimePicker
                mode={mode}
                is24Hour={is24Hour}
                display={display}
                value={value}
                onChange={(e, date) => {
                  onChange(date);
                }}
            /> 
        </View>
    </View>
  );
};

export { DateInput };
