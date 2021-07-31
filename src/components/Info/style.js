import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../theme';

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '80%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
    textAlign: 'center',
  },
});
