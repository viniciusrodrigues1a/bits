import React, { useState } from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import { Icon } from "@/components";
import { colors } from "@/styles/colors";

import { styles } from "./styles";

export const HomeView = () => {
  const [isBalanceOpened, setIsBalanceOpened] = useState(false);
  const togglingAnimation = useSharedValue(0);

  const handleViewBalance = () => {
    const toValue = isBalanceOpened ? 0 : 100;
    togglingAnimation.value = toValue;
    setIsBalanceOpened((prev) => !prev);
  };

  const ANIMATION_DURATION = 300;

  const fadeAnimationContainerStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        interpolateColor(
          togglingAnimation.value,
          [0, 100],
          [colors.neutralGray, "black"],
        ),
        { duration: ANIMATION_DURATION },
      ),
    };
  });

  const fadeAnimationTextContainerStyles = useAnimatedStyle(() => {
    const opacity = withTiming(
      interpolate(togglingAnimation.value, [0, 100], [0, 1]),
      { duration: ANIMATION_DURATION },
    );

    return {
      opacity,
    };
  });

  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.headerTopContent}>
          <Text style={styles.userLabel}>
            Olá, <Text style={styles.userLabelHighlited}> Helena Santos</Text>{" "}
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
            <Animated.View
              style={[
                styles.balanceAnimationWrapper,
                fadeAnimationContainerStyles,
              ]}>
              <Animated.View style={[fadeAnimationTextContainerStyles]}>
                <Text style={styles.balanceCoinLabel}>
                  R$ <Text style={styles.balanceValue}>sdassadsa</Text>
                </Text>
              </Animated.View>
            </Animated.View>
            <TouchableOpacity
              style={{ marginLeft: 18 }}
              onPress={handleViewBalance}>
              <Icon color={colors.secundaryDark} size={20} name="Eye" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.geralBalanceContainer}>
        <View style={styles.geralBalanceHeaderContainer}>
          <Text style={styles.geralBalanceLabel}>Geral</Text>
          <View style={styles.geralBalancePeriodSelect}>
            <Text style={styles.geralBalancePeriodSelectLabel}>Semana</Text>
            <Icon
              name="Arrow"
              size={20}
              rotatation={0}
              color={colors.primaryDark}
            />
          </View>
        </View>

        <LinearGradient
          colors={["#0C0B0F", "#1C1C1C"]}
          locations={[-0.528, 1.2225]}
          angle={0.8909}
          style={styles.geralBalanceContent}>
          <View>
            <Icon name="Graph" size={20} color="#1975FF" />
            <Text style={styles.geralBalanceValue}>
              +R${" "}
              <Text style={styles.geralBalanceValueHighlited}>10.354,00</Text>
            </Text>
            <Text style={styles.geralBalanceValueLabel}>Receitas</Text>
          </View>

          <View style={styles.geralBalanceSeparator} />
          <View>
            <Icon name="Graph" size={20} color="#E5383B" rotatation={55} />
            <Text style={styles.geralBalanceValue}>
              -R${" "}
              <Text style={styles.geralBalanceValueHighlited}>10.354,00 </Text>
            </Text>
            <Text style={styles.geralBalanceValueLabel}>Despesas</Text>
          </View>
        </LinearGradient>
      </View>
    </>
  );
};
