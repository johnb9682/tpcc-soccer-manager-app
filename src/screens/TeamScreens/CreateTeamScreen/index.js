import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';

import { styles } from './style';
import { Button, Input } from '../../../components';
import { THEME_COLORS } from '../../../components/theme';
import { useTeamStore } from '../../../shared/zustand/team';
import { useAuthStore } from '../../../shared/zustand/auth';
import { TOAST_UP_OFFSET } from '../../../components/constants';

const CreateTeamScreen = ({ navigation }) => {
  const { createTeam } = useTeamStore();
  const { userInfo } = useAuthStore();
  const [teamNameText, setTeamNameText] = React.useState('');
  const [teamDescriptionText, setTeamDescriptionText] = React.useState('');
  const [isCreateEnabled, setIsCreateEnabled] = React.useState(false);

  const handleOnCreateTeam = async () => {
    const result = await createTeam(
      userInfo.userId,
      teamNameText,
      teamDescriptionText
    );
    Toast.show({
      type: result.type,
      text1:
        result.type === 'success'
          ? 'Successfully created a new team'
          : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
    navigation.navigate('TeamHome');
  };

  React.useEffect(() => {
    if (teamNameText.length > 0) {
      setIsCreateEnabled(true);
    } else {
      setIsCreateEnabled(false);
    }
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.inputContainer}>
          <Input
            width='90%'
            value={teamNameText}
            placeholder='Enter the team name here'
            onInput={setTeamNameText}
            label='Team Name'
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            width='90%'
            value={teamDescriptionText}
            placeholder='Enter the team description here'
            onInput={setTeamDescriptionText}
            label='Team Description'
            height={350}
            multiline={true}
            showClearButton={false}
          />
        </View>
        <Button
          width='90%'
          onPress={handleOnCreateTeam}
          disabled={!isCreateEnabled}
        >
          <Text style={styles.buttonText}>Create</Text>
        </Button>
        <Button
          buttonColor={THEME_COLORS.WHITE}
          borderColor={THEME_COLORS.WHITE}
          width='90%'
          onPress={() => navigation.navigate('TeamHome')}
        >
          <Text style={[styles.buttonText, styles.cancelButton]}>Cancel</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateTeamScreen;
