import React from 'react';
import { View } from 'react-native';

import { Heading, RoundRectContainer, NoData } from '../../../../components';
import { styles } from './style';
import EventItem from '../EventItem';
import { THEME_FONT_SIZES } from '../../../../components/theme';

const EventSection = ({ title, eventType, noDataMessage, eventData = [], onPress }) => {
  return (
    <View>
      <Heading
        containerStyle={styles.heading}
        fontSize={THEME_FONT_SIZES.SYSTEM_FONT_EX_LARGE}
        fontWeight="bold"
      >
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
              <EventItem
                key={event.id}
                event={event}
                eventType={eventType}
                onPress={onPress}
              />
            );
          })
        )}
      </RoundRectContainer>
    </View>
  );
};

export default EventSection;
