import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONTS } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
    alignItems: "center",
    justifyContent:"center",
  },
  userInfoContainer: {
    marginTop: "5%",
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoTextContainer: {
    width: "100%",
    alignItems: "center",
  },
  userInfoText: {
    fontSize: THEME_FONTS.SYSTEM_FONT,
  },
  buttonGroup: {
    width: "60%",
  },
});
