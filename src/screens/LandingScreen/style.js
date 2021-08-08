import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
    paddingTop: '15%',
  },
  scrollView: { backgroundColor: THEME_COLORS.WHITE },
  forgot: {
    color: THEME_COLORS.DEFAULT_LINK_TEXT,
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_SMALL,
    marginTop: 12,
    alignSelf: 'center',
  },
  heading: { padding: 40, alignItems: 'flex-start' },
  buttonText: {
    color: THEME_COLORS.WHITE,
    fontWeight: '600',
  },
  loadingContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: 20,
  },
});
