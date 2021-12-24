import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../../../components/theme';

export const styles = StyleSheet.create({
  eventItem: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: THEME_COLORS.WHITE,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: '1%',
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
    marginHorizontal: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_TITLE,
    maxWidth: 250,
  },
  label: {
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_INFO,
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
    fontWeight: 'bold',
    marginRight: 5,
  },
  textValue: {
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_INFO,
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
    maxWidth: 120,
  },
  timeText: {
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_INFO,
  },
  icon: {
    marginRight: 5,
  },
  check: {
    backgroundColor: THEME_COLORS.WHITE,
    borderRadius: 3,
    padding: 5,
    shadowColor: THEME_COLORS.DEFAULT_SHADOW, //iOS
    shadowOffset: { height: 2, width: 0 }, // iOS
    shadowOpacity: 0.3, // iOS
    shadowRadius: 3, //iOS
    elevation: 3, // Android
    marginHorizontal: 2,
  },
  close: {
    backgroundColor: THEME_COLORS.WHITE,
    borderRadius: 3,
    marginRight: 2,
    padding: 5,
    shadowColor: THEME_COLORS.DEFAULT_SHADOW, //iOS
    shadowOffset: { height: 2, width: 0 }, // iOS
    shadowOpacity: 0.3, // iOS
    shadowRadius: 3, //iOS
    elevation: 3, // Android
    marginHorizontal: 13,
  },
  heading: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'flex-start',
  },
});
