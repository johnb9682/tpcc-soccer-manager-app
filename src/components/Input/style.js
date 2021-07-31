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
  textInputWarning: {
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: THEME_COLORS.DANGER_COLOR,
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
  warning: {
    borderColor: THEME_COLORS.DANGER_COLOR,
  },
  warningTextContainer: {
    alignSelf: 'center',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    width: '80%',
    justifyContent: 'center',
  },
  warningText: {
    color: THEME_COLORS.DANGER_COLOR,
  },
});
