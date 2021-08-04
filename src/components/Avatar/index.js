import React from 'react';
import { View,Text } from 'react-native';
import { Loading } from '../Loading';
import { useAuthStore } from '../../shared/zustand/auth';
import { THEME_COLORS, THEME_FONTS } from '../theme';
import { styles } from './style';


const Avartar = ({
    type = "circle",
    avatarUri,
    width,
    height,
    content,
}) => {
    const { isLoading } = useAuthStore();
    if (isLoading) {
        return <Loading />;
    }
    if (type == "square") {
        return (
            <View
                style={[
                    styles.avatarContainer,
                    {
                    width, height,
                    backgroundColor: THEME_COLORS.DEFAULT_BLUE_PRIMARY
                    }
                ]}
            // source={{ uri: avatarUri }}
            >
                <Text style={styles.text}>{content}</Text>
            </View>
        );
    }
    else if (type == "roundedRect") {
        return (
            <View
                style={[
                    styles.avatarContainer,
                    {
                        width, height,
                        borderRadius: (width / 4),
                    }
                ]}
            // source={{ uri: avatarUri }}
            >
                <Text style={styles.text}>{content}</Text>
            </View>
        );
    }
    return (
            <View
            style={[
                styles.avatarContainer,
                {
                    width,
                    height,
                    borderRadius: (width / 2),
                }
            ]}>
                <Text style={styles.text}>{content}</Text>
            </View>
    );

}

export { Avartar };