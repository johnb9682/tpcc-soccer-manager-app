import React from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import EventNotification from './components/EventNotification';
import TeamNotification from './components/TeamNotification';
import { NoData } from '../../components';
import { styles } from './style';
import { mockEventInfo, mockTeamInfo } from '../../shared/zustand/event/mockData';

const NotificationScreen = ({ navigation }) => {
  React.useEffect(()=>{
    console.log(mockEventInfo.length);
  })

  if (mockEventInfo.length === 0 && mockTeamInfo.length === 0) {
    return(
    <NoData message={'No Notifications'} />
    )
  }
  else{
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          keyboardDismissMode='on-drag'
          // refreshControl={
          //   <RefreshControl refreshing={isLoading} onRefresh={handleOnRefresh} />
          // }
        >
          <EventNotification />
          <TeamNotification />
          
        </ScrollView>
      </SafeAreaView>
    );
  }
};

export default NotificationScreen;
