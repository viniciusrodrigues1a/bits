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
    fontFamily: "satoshi",
    fontSize: 20,
  },
  userLabelHighlited: {
    color: "white",
    fontWeight: "700",
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
  balanceAnimationWrapper: {
    borderRadius: 4,
  },
  balanceLabel: {
    color: colors.secundaryDark,
    marginBottom: 8,
  },
  balanceCoinLabel: {
    color: "white",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  balanceValue: {
    color: "white",
    fontWeight: "bold",
  },
  geralBalanceContainer: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 32,
  },
  geralBalanceHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  geralBalanceLabel: {
    fontSize: 24,
    fontFamily: "satoshi",
    fontWeight: "700",
    color: colors.primaryDark,
  },
  geralBalancePeriodSelect: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.neutralGray,
    borderRadius: 100,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  geralBalancePeriodSelectLabel: {
    color: colors.primaryDark,
    fontSize: 14,
    marginRight: 8,
    fontWeight: "700",
  },
  geralBalanceContent: {
    backgroundColor: "",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 26,
    paddingRight: 26,
    borderRadius: 8,
    marginTop: 21,
  },
  geralBalanceValue: { color: "white", fontFamily: "satoshi" },
  geralBalanceValueHighlited: {
    fontFamily: "satoshi",
    fontWeight: "700",
  },
  geralBalanceValueLabel: {
    color: colors.neutralGray,
    fontWeight: "700",
    fontFamily: "satoshi",
  },
  geralBalanceSeparator: {
    width: 1.5,
    height: 24,
    backgroundColor: "#343434",
  },
});
