import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, ScrollView} from 'react-native';
import { Input, Button } from '../../../components';
import { styles } from './style';
import { THEME_COLORS } from '../../../components/theme';

const CreateEventScreen = ({ navigation }) => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [isCreateEnabled, setIsCreateEnabled] = useState(true)
    function handleCancel() {
        setEventName("");
        setEventDate("");
        setEventLocation("");
        setEventDescription("");
        navigation.navigate('EventHome');
    }
    useEffect(() => {
        if (eventName.length > 0 && eventDate.length > 0) {
          setIsCreateEnabled(true);
        } else {
          setIsCreateEnabled(false);
        }
      });
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View >
                    <View>
                        <Input
                            value={eventName}
                            placeholder="Event Name"
                            autoFocus={true}
                            height={70}
                            onInput={setEventName}
                            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
                            backgroundColor={THEME_COLORS.WHITE}
                        />
                        <Input
                            value={eventDate}
                            placeholder="Event Date"
                            height={70}
                            onInput={setEventDate}
                            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
                            backgroundColor={THEME_COLORS.WHITE}

                        />
                        <Input
                            value={eventLocation}
                            placeholder="Event Location"
                            height={70}
                            onInput={setEventLocation}
                            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
                            backgroundColor={THEME_COLORS.WHITE}
                        />
                        <Input
                            value={eventDescription} 
                            placeholder="Event Description"
                            height={300}
                            multiline={true}
                            onInput={setEventDescription}
                            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
                            backgroundColor={THEME_COLORS.WHITE}
                        />
                    </View>
                    <View>
                        <Button disabled={!isCreateEnabled}>
                            <Text style={styles.ButtonText}> Create</Text>
                        </Button>
                        <Button
                            buttonColor={THEME_COLORS.DANGER_COLOR}
                            borderColor={THEME_COLORS.DANGER_COLOR}
                            onPress={handleCancel}
                        >
                            <Text style={styles.ButtonText}>Cancel</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  );
};

export default CreateEventScreen;