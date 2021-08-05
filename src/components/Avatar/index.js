import React, {useMemo} from 'react';
import { View,Text } from 'react-native';
import { THEME_COLORS, THEME_FONTS } from '../theme';
import { styles } from './style';


const Avartar = ({
    type = "circle",
    avatarUri,
    width,
    height,
    content,
}) => {
    const avatarStyle = useMemo(
        () => {
            switch (type) {
                case "square":
                    return {
                        borderRadius: 0
                    }
                case "roundedRect":
                    return {
                        borderRadius: width/4
                    }
                default:
                    return {
                        borderRadius: width/2
                    }
            }
        }
        , [width, height, type])
    return (
        <View
            style={[
                styles.avatarContainer,
                avatarStyle,
                {
                width,
                height,
                backgroundColor: THEME_COLORS.DEFAULT_BLUE_PRIMARY
                }
            ]}>
            <Text style={styles.text}>{content}</Text>
        </View>
    );

}

export { Avartar };