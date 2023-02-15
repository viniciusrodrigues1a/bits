import React from "react";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import { HomeContainer, HomeParams } from "../screens/Home/Home.container";

export enum HomeNavigationRoutes {
  HOME = "@HOME_NAVIGATION/HOME",
}

export type HomeNavigationParams = {
  [HomeNavigationRoutes.HOME]: HomeParams;
};

export type HomeNavigationScreenProps<
  RouteName extends keyof HomeNavigationParams,
> = StackScreenProps<HomeNavigationParams, RouteName>;

const HomeNavigationStack = createStackNavigator<HomeNavigationParams>();

export const HomeNavigation = () => {
  return (
    <HomeNavigationStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={HomeNavigationRoutes.HOME}>
      <HomeNavigationStack.Screen
        name={HomeNavigationRoutes.HOME}
        component={HomeContainer}
      />
    </HomeNavigationStack.Navigator>
  );
};
