import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
    paddingTop: '3%',
  },
  forgot: {
    color: THEME_COLORS.DEFAULT_LINK_TEXT,
    fontSize: 12,
    marginTop: 12,
    alignSelf: 'center',
  },
  heading: { padding: 40, alignItems: 'flex-start' },
  buttonText: {
    color: THEME_COLORS.WHITE,
    fontWeight: '600',
  },
});
