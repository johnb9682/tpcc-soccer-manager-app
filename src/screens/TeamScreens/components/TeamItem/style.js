import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    padding: 20,
    justifyContent: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    maxWidth: 250,
  },
  separator: {
    borderTopWidth: 1,
    borderColor: THEME_COLORS.DEFAULT_GREY_SCALE,
    width: '90%',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
  },
  infoRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
  },
  avatar: {
    marginRight: 10,
  },
});
