import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
  },
  heading: {
    padding: 20,
    alignItems: 'flex-start',
  },
  buttonText: {
    color: THEME_COLORS.WHITE,
    fontSize: THEME_FONT_SIZES.BUTTON_FONT,
    fontWeight: '600',
  },
  inviteButton: {
    color: THEME_COLORS.DEFAULT_BLUE_PRIMARY,
  },
  cancelButton: {
    color: THEME_COLORS.DANGER_COLOR,
  },
  cancelButtonContainer: {
    height: 90,
    justifyContent: 'center',
    width: '100%',
  },
});
