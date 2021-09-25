import * as React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import { styles } from './style';
import {
  Heading,
  RoundRectContainer,
  NoData,
  Button,
  Avartar,
} from '../../../components';
import { THEME_FONT_SIZES, THEME_COLORS } from '../../../components/theme';
import { useTeamStore } from '../../../shared/zustand/team';
import TeamMemberItem from '../components/TeamMemberItem';

const TeamScreen = ({ navigation, route }) => {
  const { isLoading, currentTeamInfo, fetchTeamInfo } = useTeamStore();

  React.useEffect(() => {
    fetchTeamInfo();
  }, []);

  const leaderId = React.useMemo(() => {
    return currentTeamInfo.leaderId ?? null;
  }, [currentTeamInfo]);

  const members = React.useMemo(() => {
    return currentTeamInfo.members ?? [];
  }, [currentTeamInfo]);

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
              content={route.params.teamName ? route.params.teamName[0] : ''}
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
            <Text style={styles.description}>
              {route.params.teamDescription}
            </Text>
            {!route.params.teamDescription && (
              <NoData message={'No Description'} />
            )}
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
            {members.map((member, index) => {
              return (
                <TeamMemberItem
                  key={member.userId}
                  userData={member}
                  showSeparator={
                    members.length > 1 && index !== members.length - 1
                  }
                  isLeader={member.userId === leaderId}
                />
              );
            })}
          </RoundRectContainer>
          <Button
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.WHITE}
            width='90%'
            onPress={() => {
              navigation.navigate({
                name: 'InviteMember',
                params: { ...route.params, members },
              });
            }}
          >
            <Text style={[styles.buttonText, styles.inviteButton]}>Invite</Text>
          </Button>
          <View style={styles.leaveButtonContainer}>
            <Button
              buttonColor={THEME_COLORS.WHITE}
              borderColor={THEME_COLORS.WHITE}
              width='90%'
              onPress={() => {
                navigation.navigate('TeamHome');
                console.log('Leaving team ...');
              }}
            >
              <Text style={[styles.buttonText, styles.leaveButton]}>
                Leave Team
              </Text>
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeamScreen;
