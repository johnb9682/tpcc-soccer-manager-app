import React from 'react';
import { Image } from 'react-native';
import { Loading } from '../Loading';
import { useAuthStore } from '../../shared/zustand/auth';


const Avartar = ({
    type = "circle",
    avatarUri,
    width,
    height,
}) => {
    const { isLoading } = useAuthStore();
    if (isLoading) {
        return <Loading />;
    }
    if (type == "square") {
        return (
            <Image
            style={{ width, height,}}
            source={{ uri: avatarUri }}
            />
        );
    }
    else if (type == "roundedRect") {
        return (
            <Image
            style={{ width, height, borderRadius: (width/4)}}
            source={{ uri: avatarUri }}
            />
        );
    }
    return (
            <Image
            style={{ width, height, borderRadius: (width/2)}}
            source={{ uri: avatarUri }}
        />
    );

}

export { Avartar };