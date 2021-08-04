import React, {useState, useEffect} from 'react';
import { styles } from './style';
import { View, TextInput,Image } from 'react-native';
import { Button, Input, Loading } from '../../../components';
import { useAuthStore } from '../../../shared/zustand/auth';
import { THEME_COLORS, } from '../../../components/theme';
import { Avartar } from '../../../components/Avatar';
import { logout } from '../../../shared/api/auth';
import { isValidEmail } from '../../../components/utils';


const Profile = () => {
  const { isLoading } = useAuthStore();
  const [userEmailString, setUserEmailString] = useState("ericding0110@gmail.com");
  const [usernameString, setUsernameString] = useState("NicedeEric");
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [updateButtonTitle, setUpdateButtonTitle] = useState('Edit Profile');
  const [isEnableSave, setIsEnableSave] = useState(false);
  if (isLoading) {
    return <Loading />;
  }
  function logOut() {

  }
  function editProfile() {
      setIsEditProfile(!isEditProfile);
      if (updateButtonTitle == "Edit Profile") {
        setUpdateButtonTitle("Save");
      }
      else {
        setUpdateButtonTitle("Edit Profile");
      }
    }
  useEffect(() => {
    if (isValidEmail(userEmailString))
      setIsEnableSave(true);
    else
      setIsEnableSave(false);
  })
  const avatarContent = usernameString[0] ? usernameString[0].toUpperCase() : ''
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Avartar
          width={200} 
          height={200}
          type={"circle"}
          avatarUri="https://w.wallhaven.cc/full/0q/wallhaven-0q6vml.jpg"
          content= {avatarContent}
        />
        <View style={{marginTop: "15%",}}>
          <View  style={styles.userInfoTextContainer}>
            <Input
              onChangeText={setUserEmailString}
              value={userEmailString}
              warningText="Invalid e-mail format"
              editable={isEditProfile}
              showWarning={isEditProfile ? userEmailString.length > 0 && !isValidEmail(userEmailString) : false}
              backgroundColor={!isEditProfile ? THEME_COLORS.WHITE : THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
              borderColor = {!isEditProfile ? THEME_COLORS.DEFAULT_BLUE_PRIMARY : THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
              borderRadius={!isEditProfile ? 0 : 10}
              placeholder="Email"
            />
          </View>
          <View style={styles.userInfoTextContainer}>
          <Input
            onChangeText={setUsernameString}
            value={usernameString}
            editable={isEditProfile}
            backgroundColor={!isEditProfile ? THEME_COLORS.WHITE : THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
            borderColor = {!isEditProfile ? THEME_COLORS.DEFAULT_BLUE_PRIMARY : THEME_COLORS.DEFAULT_INPUT_BACKGROUND}
            borderRadius={!isEditProfile ? 0 : 10}
            placeholder="Username"
          />
        </View>
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <Button
            title={updateButtonTitle}
            borderWidth={0}
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            textColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            onPress={editProfile}
            disabled={!isEnableSave}
        />
        <Button
          title="Log out"
          borderWidth={0}
          buttonColor={THEME_COLORS.DANGER_COLOR}
          borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
          textColor={THEME_COLORS.WHITE}
          onPress={() => logout()}
        />
      </View>
    </View>
  );
};

export default Profile;
