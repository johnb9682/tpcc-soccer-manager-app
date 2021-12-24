import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';

import { styles } from './style';
import { dateFormat } from '../../../../components/constants';
import { THEME_COLORS, THEME_FONT_SIZES } from '../../../../components/theme';
import { Heading, NoData, RoundRectContainer } from '../../../../components';

const EventNotifications = ({
  invitationsReceived,
  invitationsSent,
  onRespond,
}) => {
  return (
    <View>
      <Heading
        containerStyle={styles.heading}
        fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
        fontWeight='bold'
      >
        Event Invitations
      </Heading>
      <View>
        <Heading
          color={THEME_COLORS.DEFAULT_INFO_TEXT}
          containerStyle={styles.heading}
          fontSize={THEME_FONT_SIZES.SYSTEM_FONT_INFO}
          fontWeight='bold'
        >
          Invitations Received
        </Heading>
        {invitationsReceived.map((eventInvitation) => {
          return (
            <View style={styles.eventItem} key={eventInvitation.invitationId}>
              <View style={styles.header}>
                <View style={styles.infoPair}>
                  <Icon
                    name='calendar-clock'
                    size={18}
                    color={THEME_COLORS.BLACK}
                    style={styles.icon}
                  />
                  <Text numberOfLines={1} style={styles.title}>
                    {eventInvitation.eventName}
                  </Text>
                </View>
                <View style={styles.infoPair}>
                  <TouchableOpacity
                    onPress={() => onRespond(eventInvitation.invitationId, 1)}
                  >
                    <Icon
                      name='check-bold'
                      size={18}
                      color={THEME_COLORS.GREEN}
                      style={styles.check}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => onRespond(eventInvitation.invitationId, -1)}
                  >
                    <Icon
                      name='close-thick'
                      size={18}
                      color={THEME_COLORS.DEFAULT_RED_PRIMARY}
                      style={styles.close}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.infoPair}>
                  <Icon
                    name='clock-time-four-outline'
                    size={14}
                    color={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
                    style={styles.icon}
                  />
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.timeText,
                      { color: THEME_COLORS.DEFAULT_BLUE_PRIMARY },
                    ]}
                  >
                    {dayjs(eventInvitation.createTime).format(dateFormat)}
                  </Text>
                </View>
                <View style={styles.infoPair}>
                  <Icon
                    name='account'
                    size={12}
                    color={THEME_COLORS.DEFAULT_INFO_TEXT}
                    style={styles.icon}
                  />
                  <Text numberOfLines={1} style={styles.textValue}>
                    Sender: {eventInvitation.senderName}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
        {!invitationsReceived.length && (
          <RoundRectContainer minHeight={50}>
            <NoData message='No Event Invitations Received' />
          </RoundRectContainer>
        )}
      </View>
      <View>
        <Heading
          color={THEME_COLORS.DEFAULT_INFO_TEXT}
          containerStyle={styles.heading}
          fontSize={THEME_FONT_SIZES.SYSTEM_FONT_INFO}
          fontWeight='bold'
        >
          Invitations Sent
        </Heading>
        {invitationsSent.map((eventInvitation) => {
          return (
            <View style={styles.eventItem} key={eventInvitation.invitationId}>
              <View style={styles.header}>
                <View style={styles.infoPair}>
                  <Icon
                    name='calendar-clock'
                    size={18}
                    color={THEME_COLORS.BLACK}
                    style={styles.icon}
                  />
                  <Text numberOfLines={1} style={styles.title}>
                    {eventInvitation.eventName}
                  </Text>
                </View>
                <View style={styles.infoPair}>
                  <Text>Status:</Text>
                </View>
              </View>
              <View style={styles.body}>
                <View style={styles.infoPair}>
                  <Icon
                    name='clock-time-four-outline'
                    size={14}
                    color={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
                    style={styles.icon}
                  />
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.timeText,
                      { color: THEME_COLORS.DEFAULT_BLUE_PRIMARY },
                    ]}
                  >
                    {dayjs(eventInvitation.createTime).format(dateFormat)}
                  </Text>
                </View>
                <View style={styles.infoPair}>
                  <Icon
                    name='account'
                    size={12}
                    color={THEME_COLORS.DEFAULT_INFO_TEXT}
                    style={styles.icon}
                  />
                  <Text numberOfLines={1} style={styles.textValue}>
                    Receiver: {eventInvitation.receiverName}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
        {!invitationsSent.length && (
          <RoundRectContainer minHeight={50}>
            <NoData message='No Event Invitations Sent' />
          </RoundRectContainer>
        )}
      </View>
    </View>
  );
};

export default EventNotifications;
