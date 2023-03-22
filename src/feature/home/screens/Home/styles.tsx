import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

const SIDE_SPACEMENT = 24;
export const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    backgroundColor: colors.primaryDark,
    paddingLeft: SIDE_SPACEMENT,
    paddingRight: SIDE_SPACEMENT,
    paddingTop: 32,
    paddingBottom: 24,
  },

  headerTopContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 56,
  },
  userLabel: {
    color: "white",
  },
  userLabelHighlited: {
    color: "white",
    fontWeight: "bold",
  },

  iconsContainer: {
    flexDirection: "row",
  },
  iconWrapper: {
    backgroundColor: colors.neutralDark,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  balanceWrapper: {
    flexDirection: "row",
  },
  balanceLabel: {
    color: colors.secundaryDark,
    marginBottom: 8,
  },
  balanceCoinLabel: {
    color: "white",
  },
  balanceValue: {
    color: "white",
    fontWeight: "bold",
  },
});
