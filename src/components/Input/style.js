import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    height: 40,
  },
  clearButtonContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: '13%',
  },
  clearText: {
    color: THEME_COLORS.DEFAULT_BLUE_SECONDARY,
  },
});
