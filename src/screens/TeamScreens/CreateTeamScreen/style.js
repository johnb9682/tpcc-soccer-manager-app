import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
  },
  scrollContainer: {
    paddingTop: 20,
  },
  buttonText: {
    color: THEME_COLORS.WHITE,
    fontSize: THEME_FONT_SIZES.BUTTON_FONT,
    fontWeight: '600',
  },
  cancelButton: {
    color: THEME_COLORS.DANGER_COLOR,
  },
  inputContainer: {
    marginBottom: 10,
  },
});
