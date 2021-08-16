import React, {useState} from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from '..';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles } from './style';
import { THEME_COLORS } from '../theme';
import dayjs from 'dayjs';

const DateInput = ({
  onChange,
  label,
  value,
  width = '60%',
  mode = 'datetime',
  is24Hour = true,
  display = 'default',
  borderWidth = 1,
  borderRadius = 10,
  borderColor = THEME_COLORS.WHITE,
  backgroundColor = THEME_COLORS.WHITE,
}) => {
  var customParseFormat = require('dayjs/plugin/customParseFormat');
  dayjs.extend(customParseFormat);
  
  const [androidMode, setAndroidMode] = useState('date');
  const [show, setShow] = useState(false);
  const showDatePicker = () => {
    setShow(true);
    setAndroidMode('date');
  };
  const showTimePicker = () => {
    setShow(true);
    setAndroidMode('time');
  }
  if (Platform.OS === 'ios') {
    return (
      <View>
            <View style={[styles.container,{
                width: width,
                borderColor: borderColor,
                borderWidth: borderWidth,
                borderRadius: borderRadius,
                backgroundColor: backgroundColor,
        }]}>
          <Text style={styles.label}>{label}</Text>
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
  }
  else if (Platform.OS === 'android') {
    return (
      <View>
        <View style={[styles.container,{
          width: width,
          borderColor: borderColor,
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          backgroundColor: backgroundColor,
        }]}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.dateContainer}>
            <View style={{ alignSelf: 'flex-start', }}>
              <Button
                width="100%"
                onPress={showDatePicker}
                buttonColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
                borderColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
              >
              <Text style={styles.btnText}>{dayjs(value).format('MMM DD, YYYY')}</Text> 
            </Button>
            </View>
            <View style={{ alignSelf: 'flex-end', }}>
              <Button
                width="100%"
                onPress={showTimePicker}
                buttonColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
                borderColor={THEME_COLORS.DEFAULT_INPUT_BACKGROUND}>
              <Text style={styles.btnText}>{dayjs(value).format('hh:mm AM').slice(0, -1)}</Text>
            </Button>
            </View>
          </View>
          <View>
          {show && <DateTimePicker
            value={value}
            mode={androidMode}
            is24Hour={is24Hour}
            display={display}
            onChange={(e, date) => {
              setShow(Platform.OS === 'ios');
              onChange(date);
            }}
            /> }
          </View>
        </View>
    </View>
    )
  }

};

export { DateInput };
