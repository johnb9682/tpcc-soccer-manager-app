import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
  },
  heading: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'flex-start',
  },
  description: {
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_INFO,
    color: THEME_COLORS.DARK_GREY,
  },
  buttonText: {
    color: THEME_COLORS.WHITE,
    fontSize: THEME_FONT_SIZES.BUTTON_FONT,
    fontWeight: '600',
  },
  leaveButton: {
    color: THEME_COLORS.DANGER_COLOR,
  },
  inviteButton: {
    color: THEME_COLORS.DEFAULT_BLUE_PRIMARY,
  },
  leaveButtonContainer: {
    height: 60,
    justifyContent: 'center',
    width: '100%',
  },
});
