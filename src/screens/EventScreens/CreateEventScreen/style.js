import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../../components/theme';

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
  },
  innerContainer: {
    paddingBottom: 50,
  },
  ButtonText: {
    color: THEME_COLORS.WHITE,
    fontSize: THEME_FONT_SIZES.BUTTON_FONT,
  },
  dangerButtonText: {
    color: THEME_COLORS.DANGER_COLOR,
    fontSize: THEME_FONT_SIZES.BUTTON_FONT,
  },
  warningText: {
    width: "80%",
    alignSelf: 'center',
    color: THEME_COLORS.DANGER_COLOR,
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_INFO2,
  }
});
