import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../../components/theme';

export const styles = StyleSheet.create({
  eventItem: {
    width: '100%',
    backgroundColor: THEME_COLORS.WHITE,
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
    shadowColor: THEME_COLORS.DEFAULT_SHADOW, //iOS
    shadowOffset: { height: 2, width: 0 }, // iOS
    shadowOpacity: 0.3, // iOS
    shadowRadius: 3, //iOS
    elevation: 3, // Android
  },
  header: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {},
  infoPair: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  label: {
    fontSize: 14,
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
    fontWeight: 'bold',
    marginRight: 5,
  },
  textValue: {
    fontSize: 14,
  },
  timeText: {
    color: THEME_COLORS.DEFAULT_BLUE_SECONDARY,
    fontWeight: 'bold',
    marginRight: 5,
  },
});
