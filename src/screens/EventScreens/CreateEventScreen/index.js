import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, ScrollView, Platform } from 'react-native';
import { DateInput } from '../../../components/DateInput';
import { Input, Button } from '../../../components';
import { styles } from './style';
import { THEME_COLORS } from '../../../components/theme';

const CreateEventScreen = ({ navigation }) => {
    const [eventName, setEventName] = useState('');
    const [eventStartDate, setEventStartDate] = useState(new Date());
    const [eventEndDate, setEventEndDate] = useState(new Date());
    const [eventLocation, setEventLocation] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [isCreateEnabled, setIsCreateEnabled] = useState(true);
    function handleCancel() {
        setEventName('');
        setEventLocation("");
        setEventEndDate(new Date());
        setEventStartDate(new Date());
        setEventDescription("");
        navigation.navigate('EventHome');
    }
    useEffect(() => {
        if (eventName.length > 0 && (eventEndDate - eventStartDate > 0)) {
            setIsCreateEnabled(true);
        } else {
            setIsCreateEnabled(false);
        }
    });
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.innerContainer}>
                    <View>
                        <Input
                            onInput={setEventName}
                            value={eventName}
                            placeholder="Event Name"
                            // autoFocus={true}
                            height={70}
                            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
                            backgroundColor={THEME_COLORS.WHITE}
                        />
                        <View>
                            <DateInput
                                dateBtnTitle="Choose start date"
                                timeBtnTitle="Choose start time"
                                label="Event Start Date"
                                value={eventStartDate}
                                onChange={setEventStartDate}
                            />
                            <DateInput
                                dateBtnTitle="Choose end date"
                                timeBtnTitle="Choose end time"
                                label="Event End Date"
                                value={eventEndDate}
                                onChange={setEventEndDate}
                            />
                        </View>
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
                            buttonColor={THEME_COLORS.WHITE}
                            borderColor={THEME_COLORS.WHITE}
                            onPress={handleCancel}
                        >
                            <Text style={styles.dangerButtonText}>Cancel</Text>
                        </Button>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  );
};

export default CreateEventScreen;