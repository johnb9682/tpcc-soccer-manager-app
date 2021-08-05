import * as React from 'react';
import { View, ScrollView, SafeAreaView, RefreshControl } from 'react-native';

import { styles } from './style';
import { SearchInput } from '../../../components';
import { useTeamStore } from '../../../shared/zustand/team';
import TeamItem from '../components/TeamItem';

const TeamHomeScreen = ({ navigation }) => {
  const { isLoading, userTeams, fetchUserTeams } = useTeamStore();
  const [searchStr, setSearchStr] = React.useState('');
  const handleOnSearch = React.useCallback(searchValue => {
    console.log(searchValue);
  }, []);

  React.useEffect(() => {
    fetchUserTeams();
  }, []);

  const handleOnRefresh = React.useCallback(() => {
    fetchUserTeams();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleOnRefresh} />
        }
      >
        <View style={styles.innerContainer}>
          <View style={styles.searchContainer}>
            <SearchInput
              width="94%"
              placeholder="Search My Teams"
              value={searchStr}
              onInput={setSearchStr}
              onSearch={handleOnSearch}
            />
          </View>
          <View>
            {userTeams.map(team => {
              return <TeamItem key={team.teamId} teamName={team.teamName} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TeamHomeScreen;
