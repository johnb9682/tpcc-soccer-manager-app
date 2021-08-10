import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
  },
  heading: {
    width: '90%',
    alignItems: 'flex-start',
    alignSelf: 'center',
    paddingVertical: '5%',
  },
});
