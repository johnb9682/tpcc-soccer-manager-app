import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
  },
});
