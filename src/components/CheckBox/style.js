import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  checkButtonContainer: {
    justifyContent: 'flex-start',
  },
  checkButton: {
    width: 20,
    height: 20,
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButtonSelected: {
    backgroundColor: THEME_COLORS.DEFAULT_BLUE_PRIMARY,
  },
  checkButtonUnSelected: {
    backgroundColor: THEME_COLORS.DEFAULT_INPUT_BACKGROUND,
  },
  icon: {
    color: THEME_COLORS.WHITE,
    fontSize: 16,
  },
  text: {
    color: THEME_COLORS.WHITE,
    fontSize: THEME_FONT_SIZES.BUTTON_FONT,
  },
});
