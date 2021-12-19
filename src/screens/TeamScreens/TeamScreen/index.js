import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  RefreshControl,
  Button as NativeButton,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { TOAST_UP_OFFSET } from '../../../components/constants';
import { styles } from './style';
import {
  Heading,
  RoundRectContainer,
  Button,
  Avartar,
  Loading,
  Input,
} from '../../../components';
import { THEME_FONT_SIZES, THEME_COLORS } from '../../../components/theme';
import { useTeamStore } from '../../../shared/zustand/team';
import TeamMemberItem from '../components/TeamMemberItem';
import { useAuthStore } from '../../../shared/zustand/auth';

const TeamScreen = ({ navigation, route }) => {
  const {
    isLoading,
    currentTeamMembers,
    currentTeamInfo,
    fetchTeamMembers,
    deleteTeamMember,
    deleteTeam,
    fetchTeamInfo,
    updateTeamInfo,
  } = useTeamStore();
  const { userInfo } = useAuthStore();
  const { teamId, leaderId } = route.params;
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedTeamName, setEditedTeamName] = React.useState('');
  const [editedTeamDescription, setEditedTeamDescription] = React.useState('');
  const newTeamDescription = React.useRef(null);

  const confirmLeave = async () => {
    const result = await deleteTeamMember(userInfo.userId, teamId);
    Toast.show({
      type: result.type,
      text1:
        result.type === 'success'
          ? 'Successfully leave the team!'
          : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
    navigation.navigate('TeamHome');
  };

  const confirmDismiss = async () => {
    const result = await deleteTeam(teamId);
    Toast.show({
      type: result.type,
      text1:
        result.type === 'success' ? result.message : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
    navigation.navigate('TeamHome');
  };

  const handleOnPressLeave = () =>
    Alert.alert(
      'Are you sure you want to leave the team?',
      'This operation can NOT be undone',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Confirm', onPress: confirmLeave },
      ]
    );

  const handleOnPressDismiss = () =>
    Alert.alert(
      'Are you sure you want to dismiss the team?',
      'This operation can NOT be undone',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        { text: 'Dismiss', onPress: confirmDismiss },
      ]
    );

  const handleOnRefresh = async () => {
    const result = await fetchTeamInfo(teamId);
    // if failed, error message will be returned
    if (result && result.type === 'error') {
      Toast.show({
        type: result.type,
        text1: 'Something went wrong when fetching the team information.',
        text2: result.message,
        topOffset: TOAST_UP_OFFSET,
      });
    }
  };

  React.useEffect(() => {
    newTeamDescription.current = editedTeamDescription;
  }, [editedTeamDescription]);

  const handleOnSaveEdit = async () => {
    const result = await updateTeamInfo(
      teamId,
      leaderId,
      editedTeamName,
      newTeamDescription.current
    );
    Toast.show({
      type: result.type,
      text1:
        result.type === 'success' ? result.message : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
  };

  const handleOnPressEdit = () => {
    if (isEditing) {
      handleOnSaveEdit();
    }
    setIsEditing(!isEditing);
  };

  React.useLayoutEffect(() => {
    if (leaderId === userInfo.userId) {
      navigation.setOptions({
        title: editedTeamName,
        headerRight: () => (
          <NativeButton
            color={
              isEditing
                ? THEME_COLORS.DEFAULT_BLUE_PRIMARY
                : THEME_COLORS.DANGER_COLOR
            }
            onPress={handleOnPressEdit}
            title={isEditing ? 'Save' : 'Edit'}
          />
        ),
      });
    }
  }, [navigation, leaderId, userInfo, isEditing, setIsEditing, editedTeamName]);

  React.useEffect(() => {
    setEditedTeamName(currentTeamInfo.teamName);
    setEditedTeamDescription(currentTeamInfo.teamDescription);
  }, [currentTeamInfo.teamName, currentTeamInfo.teamDescription]);

  React.useEffect(() => {
    // fetch team information on screen focus
    const unsubscribe = navigation.addListener('focus', () => {
      fetchTeamInfo(teamId);
      fetchTeamMembers(teamId);
    });
    return unsubscribe;
  }, [route, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleOnRefresh} />
        }
      >
        <View>
          <View style={styles.avatarContainer}>
            <Avartar
              width={160}
              height={160}
              type='circle'
              content={editedTeamName ? editedTeamName[0] : ''}
              fontSize={THEME_FONT_SIZES.AVATAR_FONT_MAX}
            />
          </View>
          {isEditing && (
            <View>
              <Heading
                containerStyle={styles.heading}
                fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
                fontWeight='bold'
                isEditing={isEditing}
              >
                Team Name
              </Heading>
              <Input
                value={editedTeamName}
                width='90%'
                borderColor={
                  isEditing
                    ? THEME_COLORS.DEFAULT_INPUT_BACKGROUND
                    : THEME_COLORS.DEFAULT_BLUE_PRIMARY
                }
                onInput={setEditedTeamName}
              />
            </View>
          )}
          <View>
            <Heading
              containerStyle={styles.heading}
              fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
              fontWeight='bold'
              isEditing={isEditing}
            >
              Team Description
            </Heading>

            <Input
              borderColor={
                isEditing
                  ? THEME_COLORS.DEFAULT_INPUT_BACKGROUND
                  : THEME_COLORS.DEFAULT_BLUE_PRIMARY
              }
              backgroundColor={
                isEditing
                  ? THEME_COLORS.DEFAULT_INPUT_BACKGROUND
                  : THEME_COLORS.WHITE
              }
              multiline
              width='90%'
              editable={isEditing}
              value={editedTeamDescription}
              onInput={setEditedTeamDescription}
            />
          </View>

          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Team Members
          </Heading>
          <RoundRectContainer
            borderRadius={15}
            paddingHorizontal={5}
            justifyContent='flex-start'
          >
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {currentTeamMembers.map((member, index) => {
                  return (
                    <TeamMemberItem
                      key={member.userId}
                      userData={member}
                      showSeparator={
                        currentTeamMembers.length > 1 &&
                        index !== currentTeamMembers.length - 1
                      }
                      isLeader={member.userId === leaderId}
                    />
                  );
                })}
              </>
            )}
          </RoundRectContainer>
          <Button
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.WHITE}
            width='90%'
            onPress={() => {
              navigation.navigate({
                name: 'InviteMember',
                params: { ...route.params, members: currentTeamMembers },
              });
            }}
          >
            <Text style={[styles.buttonText, styles.inviteButton]}>
              Invite New Member
            </Text>
          </Button>
          {leaderId !== userInfo.userId && (
            <Button
              buttonColor={THEME_COLORS.WHITE}
              borderColor={THEME_COLORS.WHITE}
              width='90%'
              onPress={handleOnPressLeave}
            >
              <Text style={[styles.buttonText, styles.leaveButton]}>
                Leave Team
              </Text>
            </Button>
          )}
          {isEditing && userInfo.userId === leaderId && (
            <Button
              buttonColor={THEME_COLORS.DANGER_COLOR}
              borderColor={THEME_COLORS.DANGER_COLOR}
              width='90%'
              onPress={handleOnPressDismiss}
            >
              <Text style={[styles.buttonText]}>Dismiss Team</Text>
            </Button>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeamScreen;
