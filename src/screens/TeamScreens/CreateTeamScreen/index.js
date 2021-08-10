import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './style';
import { Button, Heading, Input, Loading } from '../../../components';
import { THEME_FONT_SIZES } from '../../../components/theme';

const CreateTeamScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <Heading
          fontSize={THEME_FONT_SIZES.HEADING_MEDIUM}
          fontWeight="bold"
          containerStyle={styles.heading}
        >
          New Team
        </Heading>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateTeamScreen;
