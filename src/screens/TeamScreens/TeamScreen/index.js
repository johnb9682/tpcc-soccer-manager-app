import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Alert,
  Button as NativeButton,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { TOAST_UP_OFFSET } from '../../../components/constants';
import { styles } from './style';
import {
  Heading,
  RoundRectContainer,
  NoData,
  Button,
  Avartar,
  Loading,
} from '../../../components';
import { THEME_FONT_SIZES, THEME_COLORS } from '../../../components/theme';
import { useTeamStore } from '../../../shared/zustand/team';
import TeamMemberItem from '../components/TeamMemberItem';
import { useAuthStore } from '../../../shared/zustand/auth';

const TeamScreen = ({ navigation, route }) => {
  const {
    isLoading,
    currentTeamMembers,
    fetchTeamMembers,
    deleteTeamMember,
    deleteTeam,
  } = useTeamStore();
  const { userInfo } = useAuthStore();
  const { teamName, teamId, teamDescription, leaderId } = route.params;
  const [isEditing, setIsEditing] = React.useState(false);

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
        result.type === 'success'
          ? 'Successfully deleted a team!'
          : 'Something went wrong',
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

  React.useLayoutEffect(() => {
    if (leaderId === userInfo.userId) {
      navigation.setOptions({
        headerRight: () => (
          <NativeButton
            color={
              isEditing
                ? THEME_COLORS.DEFAULT_BLUE_PRIMARY
                : THEME_COLORS.DANGER_COLOR
            }
            onPress={() => setIsEditing(!isEditing)}
            title={isEditing ? 'Save' : 'Edit'}
          />
        ),
      });
    }
  }, [navigation, leaderId, userInfo, isEditing, setIsEditing]);

  React.useEffect(() => {
    // fetch teams on screen focus
    const unsubscribe = navigation.addListener('focus', () => {
      fetchTeamMembers(teamId);
    });
    return unsubscribe;
  }, [route, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
      >
        <View>
          <View style={styles.avatarContainer}>
            <Avartar
              width={160}
              height={160}
              type='circle'
              content={teamName ? teamName[0] : ''}
              fontSize={THEME_FONT_SIZES.AVATAR_FONT_MAX}
            />
          </View>

          <Heading
            containerStyle={styles.heading}
            fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
            fontWeight='bold'
          >
            Team Description
          </Heading>
          <RoundRectContainer
            minHeight={100}
            paddingTop={10}
            paddingBottom={10}
            borderRadius={15}
            justifyContent='flex-start'
          >
            <Text style={styles.description}>{teamDescription}</Text>
            {!teamDescription && <NoData message={'No Description'} />}
          </RoundRectContainer>
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
