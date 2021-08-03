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
  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoPair: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    maxWidth: 250,
  },
  label: {
    fontSize: 14,
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
    fontWeight: 'bold',
    marginRight: 5,
  },
  textValue: {
    fontSize: 14,
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
    maxWidth: 120,
  },
  timeText: {
    fontSize: 14,
  },
  icon: {
    marginRight: 5,
  },
});
