import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
    alignItems: 'center',
  },
  userInfoContainer: {
    marginTop: '10%',
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfoTextContainer: {
    marginTop: '5%',
    width: '100%',
    alignItems: 'center',
  },
  userInfoText: {
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT,
  },
  buttonGroup: {
    marginTop: '10%',
    width: '70%',
  },
  buttonText: {
    fontSize: THEME_FONT_SIZES.BUTTON_FONT,
    color: THEME_COLORS.WHITE,
  },
  editButton: {
    color: THEME_COLORS.DEFAULT_BLUE_PRIMARY,
  },
});
