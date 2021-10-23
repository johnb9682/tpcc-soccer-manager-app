import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    backgroundColor: THEME_COLORS.WHITE,
    borderRadius: 10,
    padding: 5,
    // borderWidth: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_INFO2,
    maxWidth: 250,
  },
  email: {
    fontSize: THEME_FONT_SIZES.SYSTEM_FONT_INFO,
  },
  leaderLabel: {
    fontWeight: 'bold',
    color: THEME_COLORS.DEFAULT_BLUE_SECONDARY,
  },
  leaderLabelContainer: {
    height: '100%',
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    borderTopWidth: 1,
    borderColor: THEME_COLORS.DEFAULT_GREY_SCALE,
    width: '98%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
  },
  avatar: {
    marginRight: 10,
  },
});
