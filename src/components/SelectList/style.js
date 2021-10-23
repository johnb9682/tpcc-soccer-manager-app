import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    width: '100%',
  },
  searchContainer: {
    width: '100%',
  },
  itemContainer: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    backgroundColor: THEME_COLORS.WHITE,
    borderRadius: 10,
    padding: 5,
  },
});
