import React from 'react';
import { View } from 'react-native';

import { Heading, RoundRectContainer, NoData } from '../../../../components';
import { styles } from './style';
import EventItem from '../EventItem';

const EventSection = ({ title, eventType, noDataMessage, eventData = [] }) => {
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
            return (
              <EventItem key={event.id} event={event} eventType={eventType} />
            );
          })
        )}
      </RoundRectContainer>
    </View>
  );
};

export default EventSection;
