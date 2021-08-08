import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
  },
  innerContainer: {
    paddingBottom: 70,
  },
  searchContainer: {
    width: '100%',
  },
  bottomContainer: {
    height: 90,
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 0.2,
    borderLeftWidth: 0.2,
    borderRightWidth: 0.2,
    borderColor: THEME_COLORS.DEFAULT_GREY_SCALE_2,
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
