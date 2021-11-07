import * as React from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  Text,
} from 'react-native';
import Toast from 'react-native-toast-message';

import { styles } from './style';
import {
  SearchInput,
  Button,
  NoData,
  NotificationButton,
} from '../../../components';
import { useTeamStore } from '../../../shared/zustand/team';
import { useAuthStore } from '../../../shared/zustand/auth';
import TeamItem from '../components/TeamItem';
import { TOAST_UP_OFFSET } from '../../../components/constants';

const TeamHomeScreen = ({ navigation }) => {
  const { userInfo } = useAuthStore();
  const { isLoading, userTeams, fetchUserTeams } = useTeamStore();
  const [searchStr, setSearchStr] = React.useState('');
  const [filteredTeams, setFilteredTeams] = React.useState([]);

  const handleOnSearch = React.useCallback(
    (searchValue) => {
      const lowercaseSearchValue = searchValue.toLowerCase();
      const updatedFilteredTeams = userTeams.filter((team) =>
        team.teamName.toLowerCase().includes(lowercaseSearchValue)
      );
      setFilteredTeams(updatedFilteredTeams);
    },
    [userTeams]
  );

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <NotificationButton
          onPress={() => {
            navigation.navigate('TeamNotification');
          }}
        />
      ),
    });
    // fetch teams on screen focus
    const unsubscribe = navigation.addListener('focus', async () => {
      const result = await fetchUserTeams(userInfo.userId);
      if (result) {
        Toast.show({
          type: 'error',
          text1: 'Failed to fetch teams',
          topOffset: TOAST_UP_OFFSET,
        });
      }
    });
    return unsubscribe;
  }, [userInfo, navigation]);

  React.useEffect(() => {
    setFilteredTeams(userTeams);
  }, [userTeams]);

  const handleOnRefresh = async () => {
    const result = fetchUserTeams(userInfo.userId);
    if (result) {
      Toast.show({
        type: 'error',
        text1: 'Failed to fetch teams',
        topOffset: TOAST_UP_OFFSET,
      });
    }
  };

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
          <View style={styles.searchContainer}>
            <SearchInput
              width='94%'
              placeholder='Search My Teams'
              value={searchStr}
              onInput={setSearchStr}
              onSearch={handleOnSearch}
            />
          </View>
          <View>
            {filteredTeams.map((team) => {
              return (
                <TeamItem
                  key={team.teamId}
                  teamName={team.teamName}
                  onPress={() =>
                    navigation.navigate({ name: 'Team', params: team })
                  }
                />
              );
            })}
          </View>
          {filteredTeams.length === 0 && (
            <View style={styles.noData}>
              <NoData message={'No Teams Found'} />
            </View>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Button
          borderWidth={0}
          height={50}
          onPress={() => navigation.navigate('CreateTeam')}
        >
          <Text style={[styles.createButtonText, styles.buttonText]}>
            Create a New Team
          </Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default TeamHomeScreen;
