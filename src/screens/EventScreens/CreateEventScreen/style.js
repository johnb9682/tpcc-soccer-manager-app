import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONTS } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
    },
    ButtonText: {
        color: THEME_COLORS.WHITE,
        fontSize: THEME_FONTS.BUTTON_FONT,
    },
});
