import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_TITLE,
    fontWeight: 'bold',
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
  },
});
