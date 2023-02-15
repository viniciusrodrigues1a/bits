import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export enum StackNavigationRoutes {
  HOME_NAVIGATION = "@HOME_NAVIGATION",
}

export type StackNavigationParams = {
  [StackNavigationRoutes.HOME_NAVIGATION]: undefined;
};

export const StackNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={StackNavigationRoutes.HOME_NAVIGATION}>
      <Stack.Screen
        name={StackNavigationRoutes.HOME_NAVIGATION}
        component={() => {}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
