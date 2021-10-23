import { StyleSheet } from 'react-native';
import { THEME_COLORS } from '../theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: THEME_COLORS.WHITE,
  },
  center: {
    width: '100%',
    height: '100%',
  },
  loadingText: {
    marginTop: 10,
  },
});
