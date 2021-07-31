import React from 'react';
import { styles } from './style';
import { View, Text, Image, } from 'react-native';
import { Button, Input, Loading } from '../../../components';
import { useAuthStore } from '../../../shared/zustand/auth';
import { THEME_COLORS } from '../../../components/theme';



const Profile = () => {
  const { isLoading } = useAuthStore();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://w.wallhaven.cc/full/k7/wallhaven-k7xwjm.jpg"
        }}
        style={styles.image}
      ></Image>
      <View style={styles.userInfoContainer}>
        <View  style={styles.userInfoTextContainer}>
        <Text style={styles.userInfoText}>
          User's Email
          </Text>
        </View>
        <View style={styles.userInfoTextContainer}>
        <Text style={styles.userInfoText}>
          Username
          </Text>
        </View>
      </View>

      <View style={styles.buttonGroup}>
      <Button
            title="Update my profile"
            borderWidth={0}
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            textColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            onPress={() => {console.warn("Update")}}
      />
      <Button
        title="Log out"
        borderWidth={0}
        buttonColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
        borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
        textColor={THEME_COLORS.WHITE}
        onPress={() => {console.warn("Log out")}}
        />
        </View>
    </View>
  );
};

export default Profile;
