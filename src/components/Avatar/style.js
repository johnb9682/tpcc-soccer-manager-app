import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../theme';

export const styles = StyleSheet.create({
  avatarContainer: {
    backgroundColor: THEME_COLORS.DEFAULT_BLUE_PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: THEME_COLORS.WHITE,
    fontSize: THEME_FONT_SIZES.AVATAR_FONT_MAX,
  },
});
