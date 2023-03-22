import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeNavigation } from "@/feature/home/navigation";

const Stack = createStackNavigator();

export enum StackNavigationRoutes {
  HOME_NAVIGATION = "@HOME_NAVIGATION",
}

export type StackNavigationParams = {
  [StackNavigationRoutes.HOME_NAVIGATION]: undefined;
};

export const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName={StackNavigationRoutes.HOME_NAVIGATION}>
    <Stack.Screen
      name={StackNavigationRoutes.HOME_NAVIGATION}
      component={HomeNavigation}
    />
  </Stack.Navigator>
);
