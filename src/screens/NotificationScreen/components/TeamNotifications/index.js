import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import dayjs from 'dayjs';

import { styles } from './style';
import { dateFormat } from '../../../../components/constants';
import { THEME_COLORS, THEME_FONT_SIZES } from '../../../../components/theme';
import { Heading, NoData, RoundRectContainer } from '../../../../components';
import { INVITE_STATUS } from '../../../../shared/api/invitation/constants';

const TeamNotifications = ({
  invitationsReceived,
  invitationsSent,
  onRespond,
  onCancel,
}) => {
  return (
    <View>
      <Heading
        containerStyle={styles.heading}
        fontSize={THEME_FONT_SIZES.SYSTEM_FONT}
        fontWeight='bold'
      >
        Team Invitations
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
        {invitationsReceived.map((teamInvitation) => {
          return (
            <View style={styles.teamItem} key={teamInvitation.invitationId}>
              <View style={styles.header}>
                <View style={styles.infoPair}>
                  <Icon
                    name='calendar-clock'
                    size={18}
                    color={THEME_COLORS.BLACK}
                    style={styles.icon}
                  />
                  <Text numberOfLines={1} style={styles.title}>
                    {teamInvitation.teamName}
                  </Text>
                </View>
                {teamInvitation.status === 0 ? (
                  <View style={styles.infoPair}>
                    <TouchableOpacity
                      onPress={() => onRespond(teamInvitation.invitationId, 1)}
                    >
                      <Icon
                        name='check-bold'
                        size={18}
                        color={THEME_COLORS.GREEN}
                        style={styles.check}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => onRespond(teamInvitation.invitationId, -1)}
                    >
                      <Icon
                        name='close-thick'
                        size={18}
                        color={THEME_COLORS.DEFAULT_RED_PRIMARY}
                        style={styles.close}
                      />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <Text>{INVITE_STATUS[teamInvitation.status]}</Text>
                )}
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
                    {dayjs(teamInvitation.createTime).format(dateFormat)}
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
                    Sender: {teamInvitation.senderName}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
        {!invitationsReceived.length && (
          <RoundRectContainer minHeight={50}>
            <NoData message='No Team Invitations Received' />
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
        {invitationsSent.map((teamInvitation) => {
          return (
            <View style={styles.teamItem} key={teamInvitation.invitationId}>
              <View style={styles.header}>
                <View style={styles.infoPair}>
                  <Icon
                    name='calendar-clock'
                    size={18}
                    color={THEME_COLORS.BLACK}
                    style={styles.icon}
                  />
                  <Text numberOfLines={1} style={styles.title}>
                    {teamInvitation.teamName}
                  </Text>
                </View>
                <View style={styles.infoPair}>
                  <Text>{INVITE_STATUS[teamInvitation.status]}</Text>
                  <TouchableOpacity
                    onPress={() => onCancel(teamInvitation.invitationId)}
                  >
                    <Icon
                      name='cancel'
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
                    {dayjs(teamInvitation.createTime).format(dateFormat)}
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
                    Receiver: {teamInvitation.receiverName}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
        {!invitationsSent.length && (
          <RoundRectContainer minHeight={50}>
            <NoData message='No Team Invitations Sent' />
          </RoundRectContainer>
        )}
      </View>
    </View>
  );
};

export default TeamNotifications;
