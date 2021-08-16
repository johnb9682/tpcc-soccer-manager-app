import { StyleSheet } from 'react-native';

import { THEME_COLORS, THEME_FONT_SIZES } from '../theme';

export const styles = StyleSheet.create({
    container: {
        marginLeft: "10%",
        marginTop: "3%",
        marginBottom: "3%",
    },
    label: {
        fontSize: THEME_FONT_SIZES.BUTTON_FONT,
        fontWeight: "700",
    },
    btnText: {
        color: THEME_COLORS.DEFAULT_BLUE_PRIMARY,
        fontSize: THEME_FONT_SIZES.BUTTON_FONT,
    },
    dateContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
