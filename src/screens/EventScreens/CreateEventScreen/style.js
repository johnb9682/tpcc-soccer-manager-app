import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../../components/theme';

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
  },
  ButtonText: {
    color: THEME_COLORS.WHITE,
    fontSize: THEME_FONT_SIZES.BUTTON_FONT,
  },
});
