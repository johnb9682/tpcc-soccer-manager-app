import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
    paddingTop: '15%',
  },
  infoContainer: {
    justifyContent: 'center',
    paddingTop: 20,
  },
  bottomContainer: {
    height: '15%',
    justifyContent: 'center',
  },
  heading: { padding: 20, alignItems: 'flex-start' },
  buttonText: {
    color: THEME_COLORS.WHITE,
    fontWeight: '600',
  },
  createButtonText: { fontSize: 18 },
});
