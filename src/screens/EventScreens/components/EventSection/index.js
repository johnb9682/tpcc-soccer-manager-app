import React from 'react';
import { View, Text } from 'react-native';

import { Heading, RoundRectContainer, NoData } from '../../../../components';
import { styles } from './style';
import EventItem from '../EventItem';
import { THEME_COLORS } from '../../../../components/theme';
const EventSection = ({ title, noDataMessage, eventData = [] }) => {
  return (
    <View>
      <Heading containerStyle={styles.heading} fontSize={30} fontWeight="bold">
        {title}
      </Heading>
      <RoundRectContainer
        height={eventData.length === 0 ? 100 : null}
        borderRadius={15}
      >
        {eventData.length === 0 ? (
          <NoData message={noDataMessage} />
        ) : (
          eventData.map(event => {
            return <EventItem key={event.id} event={event} />;
          })
        )}
      </RoundRectContainer>
    </View>
  );
};

export default EventSection;
