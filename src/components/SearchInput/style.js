import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: THEME_COLORS.DEFAULT_GREY_SCALE_2,
  },
});
