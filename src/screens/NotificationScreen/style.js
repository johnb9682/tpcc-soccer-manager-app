import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
  },
  searchContainer: {
    width: '100%',
  },
  noData: {
    marginVertical: '20%',
  },
  buttonText: {
    color: THEME_COLORS.WHITE,
    fontWeight: '600',
  },
  createButtonText: { fontSize: 18 },
  todayText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: THEME_COLORS.DEFAULT_INFO_TEXT,
  },
});
