import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    shadowColor: THEME_COLORS.DEFAULT_SHADOW,
  },
  text: {
    color: THEME_COLORS.WHITE,
  },
});
