import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  textInput: {
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10,
    width: '80%',
    height: 40,
    backgroundColor: THEME_COLORS.DEFAULT_INPUT_BACKGROUND,
  },
});
