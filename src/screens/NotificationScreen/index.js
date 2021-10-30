import React from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';

import { NoData } from '../../components';
import { styles } from './style';

const NotificationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
        // refreshControl={
        //   <RefreshControl refreshing={isLoading} onRefresh={handleOnRefresh} />
        // }
      >
        <NoData message={'No Notifications'} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
