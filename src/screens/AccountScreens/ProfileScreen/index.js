import React, { useState, useEffect } from 'react';
import { styles } from './style';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Button, Input, Loading } from '../../../components';
import { THEME_COLORS } from '../../../components/theme';
import { Avartar } from '../../../components/Avatar';
import { isValidEmail } from '../../../components/utils';
import { useProfileStore } from '../../../shared/zustand/profile';
import { useAuthStore } from '../../../shared/zustand/auth';

const Profile = ({ navigation }) => {
  const { isLoading, userEmail, userName } = useProfileStore();
  const { logout } = useAuthStore();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [updateButtonTitle, setUpdateButtonTitle] = useState('Edit Profile');
  const [isEnableSave, setIsEnableSave] = useState(false);
  const [usernameStr, setusernameStr] = useState('NicdeErc');
  if (isLoading) {
    return <Loading />;
  }
  function editProfile() {
    setIsEditProfile(!isEditProfile);
    if (updateButtonTitle == 'Edit Profile') {
      setUpdateButtonTitle('Save');
    } else {
      setUpdateButtonTitle('Edit Profile');
      // updateUseInfo(userEmail, usernameStr);
    }
  }
  useEffect(() => {
    // fetchUserInfo();
    if (isValidEmail(userEmail)) {
      setIsEnableSave(true);
    } else {
      setIsEnableSave(false);
    }
    // fetchUserInfo();
  });
  const avatarContent = usernameStr[0] ? usernameStr[0].toUpperCase() : '';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <View style={styles.innerContainer}>
          <View style={styles.userInfoContainer}>
            <Avartar
              width={200}
              height={200}
              type={'circle'}
              avatarUri="https://w.wallhaven.cc/full/0q/wallhaven-0q6vml.jpg"
              content={avatarContent}
            />
            <View>
              <View style={styles.userInfoTextContainer}>
                <Input
                  onInput={() => {}}
                  value={userEmail}
                  warningText="Invalid e-mail format"
                  editable={isEditProfile}
                  showWarning={
                    isEditProfile
                      ? userEmail.length > 0 && !isValidEmail(userEmail)
                      : false
                  }
                  backgroundColor={
                    !isEditProfile
                      ? THEME_COLORS.WHITE
                      : THEME_COLORS.DEFAULT_INPUT_BACKGROUND
                  }
                  borderColor={
                    !isEditProfile
                      ? THEME_COLORS.DEFAULT_BLUE_PRIMARY
                      : THEME_COLORS.DEFAULT_INPUT_BACKGROUND
                  }
                  borderRadius={!isEditProfile ? 0 : 10}
                  placeholder="Email"
                />
              </View>
              <View style={styles.userInfoTextContainer}>
                <Input
                  onInput={setusernameStr}
                  value={usernameStr}
                  editable={isEditProfile}
                  backgroundColor={
                    !isEditProfile
                      ? THEME_COLORS.WHITE
                      : THEME_COLORS.DEFAULT_INPUT_BACKGROUND
                  }
                  borderColor={
                    !isEditProfile
                      ? THEME_COLORS.DEFAULT_BLUE_PRIMARY
                      : THEME_COLORS.DEFAULT_INPUT_BACKGROUND
                  }
                  borderRadius={!isEditProfile ? 0 : 10}
                  placeholder="Username"
                />
              </View>
            </View>
          </View>
          <View style={styles.buttonGroup}>
            <Button
              borderWidth={0}
              buttonColor={THEME_COLORS.WHITE}
              borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
              onPress={editProfile}
              disabled={!isEnableSave}
            >
              <Text style={[styles.buttonText, styles.editButton]}>
                {updateButtonTitle}
              </Text>
            </Button>
            <Button
              borderWidth={0}
              buttonColor={THEME_COLORS.DANGER_COLOR}
              borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
              onPress={() => logout()}
            >
              <Text style={styles.buttonText}>Log out</Text>
            </Button>
            <Button
              onPress={() => {
                navigation.navigate('Setting');
              }}
            >
              <Text style={styles.buttonText}>Settings</Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
