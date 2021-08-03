import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
    paddingTop: '15%',
  },
  innerContainer: {
    paddingBottom: 70,
  },
  infoContainer: {
    justifyContent: 'center',
    paddingTop: 20,
  },
  searchContainer: {
    width: '100%',
  },
  bottomContainer: {
    height: 90,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  heading: { padding: 20, alignItems: 'flex-start' },
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
  todayContainer: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    width: '90%',
    height: 40,
    marginBottom: -15,
  },
});
