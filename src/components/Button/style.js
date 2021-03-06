import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../theme';

export const styles = StyleSheet.create({
  container: { justifyContent: 'center', alignItems: 'center' },
  button: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: THEME_COLORS.DEFAULT_SHADOW, //iOS
    shadowOffset: { height: 2, width: 0 }, // iOS
    shadowOpacity: 0.3, // iOS
    shadowRadius: 3, //iOS
    elevation: 3, // Android
  },
  buttonDisabled: {
    opacity: 0.5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    shadowColor: THEME_COLORS.DEFAULT_SHADOW, //iOS
    shadowOffset: { height: 2, width: 0 }, // iOS
    shadowOpacity: 0.3, // iOS
    shadowRadius: 3, //iOS
    elevation: 3, // Android
  },
});
