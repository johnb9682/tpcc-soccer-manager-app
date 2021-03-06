import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
  },
  innerContainer: {
    paddingBottom: 70,
  },
  infoContainer: {
    justifyContent: 'center',
    paddingTop: 20,
  },
  searchContainer: {
    width: '100%',
  },
  bottomContainer: {
    height: 90,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 0.2,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    borderColor: THEME_COLORS.DEFAULT_GREY_SCALE_2,
  },
  heading: { padding: 20, alignItems: 'flex-start' },
  buttonText: {
    color: THEME_COLORS.WHITE,
    fontWeight: '600',
  },
  createButtonText: { fontSize: THEME_FONT_SIZES.BUTTON_FONT_LARGE },
  todayText: {
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_INFO2,
    fontWeight: 'bold',
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
  },
  todayContainer: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    width: '90%',
    height: 40,
    marginBottom: -15,
  },
});
