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
});
