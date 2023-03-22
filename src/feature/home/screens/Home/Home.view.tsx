import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { Icon } from "@/components";
import { colors } from "@/styles/colors";

import { styles } from "./styles";
export const HomeView = () => {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.headerTopContent}>
          <Text style={styles.userLabel}>
            Hello, <Text style={styles.userLabelHighlited}> Helena Santos</Text>{" "}
            👋
          </Text>

          <View style={styles.iconsContainer}>
            <TouchableOpacity style={styles.iconWrapper}>
              <Icon color="white" size={20} name="Bell" />
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.iconWrapper, marginLeft: 16 }}>
              <Icon color="white" size={20} name="Engine" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text style={styles.balanceLabel}>Seu saldo atual</Text>

          <View style={styles.balanceWrapper}>
            <Text style={styles.balanceCoinLabel}>
              R$ <Text style={styles.balanceValue}>3.000,00</Text>
            </Text>
            <TouchableOpacity style={{ marginLeft: 18 }}>
              <Icon color={colors.secundaryDark} size={20} name="Eye" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
