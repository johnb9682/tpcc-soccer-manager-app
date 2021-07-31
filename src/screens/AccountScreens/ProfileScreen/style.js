import { StyleSheet } from 'react-native';

import { THEME_COLORS } from '../../../components/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.WHITE,
    paddingTop: '15%',
    alignItems: "center",
  },
  image: {
    marginTop: "15%",
    width: "60%",
    height: "30%",
  },
  userInfoContainer: {
    marginTop: "5%",
    width: "60%",
    height: "30%",
    justifyContent: "center",
  },
  userInfoTextContainer: {
    height: "20%",
    width: "100%",
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
    alignItems: "center",
    marginBottom: "10%",
  },
  userInfoText: {
    fontSize: 24,
  },
  buttonGroup: {
    width: "80%",
  }
});
