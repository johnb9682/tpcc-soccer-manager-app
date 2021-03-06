import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../theme';

export const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
  },
  label: {
    alignSelf: 'center',
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_TITLE,
    fontWeight: 'bold',
  },
  container: {
    marginVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  containerWarning: {
    marginVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: THEME_COLORS.DANGER_COLOR,
  },
  prefixAccessoryContainer: {
    width: 20,
    height: 20,
  },
  textInput: {
    alignSelf: 'center',
  },
  clearButtonContainer: {
    width: 20,
    height: 20,
  },
  clearIcon: {
    color: THEME_COLORS.DEFAULT_GREY_SCALE_2,
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
