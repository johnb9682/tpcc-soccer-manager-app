import React, { useState, useEffect, useCallback } from 'react';
import { styles } from './style';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { Button, Input, Loading } from '../../../components';
import { THEME_COLORS } from '../../../components/theme';
import { Avartar } from '../../../components/Avatar';
import { isValidEmail } from '../../../components/utils';
import { useProfileStore } from '../../../shared/zustand/profile';
import { useAuthStore } from '../../../shared/zustand/auth';
import Toast from 'react-native-toast-message';
import { TOAST_UP_OFFSET } from '../../../components/constants';

const Profile = ({ navigation }) => {
  const { isLoading, updateUserInfo, fetchUserInfo } = useProfileStore();
  const { logout, userInfo, updateAuthUserInfo } = useAuthStore();
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [isEnableSave, setIsEnableSave] = useState(false);
  const [usernameStr, setusernameStr] = useState(userInfo['userName']);
  const [userEmail, setuserEmail] = useState(userInfo['email']);
  const userId = userInfo['userId'];
  function editProfile() {
    if (isEditProfile === false) {
      setIsEditProfile(true);
    } else {
      onPressSave();
    }
  }
  function cancelEdit() {
    setusernameStr(userInfo['userName']);
    setuserEmail(userInfo['email']);
    setIsEditProfile(false);
  }
  const onPressSave = useCallback(async () => {
    const result = await updateUserInfo(userEmail, userId, usernameStr);
    const toastTitle =
      result.status === 'success'
        ? 'Success!'
        : result.status === 'info'
        ? 'Uh-Oh'
        : 'Something went wrong';
    Toast.show({
      type: result.status,
      text1: toastTitle,
      text2:
        result.status === 'success'
          ? (`Hi ${result.data.userName}! ` ?? '') + result.message
          : result.message,
      topOffset: TOAST_UP_OFFSET,
    });
    if (result.status === 'success') {
      setIsEditProfile(false);
    }
    updateAuthUserInfo();
  });
  useEffect(() => {
    if (isValidEmail(userEmail)) {
      setIsEnableSave(true);
    } else {
      setIsEnableSave(false);
    }
  });
  const avatarContent = usernameStr[0] ? usernameStr[0].toUpperCase() : '';
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
      >
        <View style={styles.innerContainer}>
          {isLoading && <Loading />}
          <View style={styles.userInfoContainer}>
            <Avartar
              width={200}
              height={200}
              type={'circle'}
              avatarUri='https://w.wallhaven.cc/full/0q/wallhaven-0q6vml.jpg'
              content={avatarContent}
            />
            <View>
              <View style={styles.userInfoTextContainer}>
                <Input
                  onInput={setuserEmail}
                  value={userEmail}
                  warningText='Invalid e-mail format'
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
                  placeholder='Email'
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
                  placeholder='Username'
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
                {isEditProfile ? 'Save' : 'Edit Profile'}
              </Text>
            </Button>
            {isEditProfile && (
              <Button
                borderWidth={0}
                buttonColor={THEME_COLORS.WHITE}
                borderColor={THEME_COLORS.DANGER_COLOR}
                onPress={cancelEdit}
              >
                <Text style={[styles.buttonText, styles.cancelButton]}>
                  Cancel
                </Text>
              </Button>
            )}
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
