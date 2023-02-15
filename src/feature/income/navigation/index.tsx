import React from "react";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";

import { IncomeValue, IncomeValueParams } from "../screens/IncomeValue";

export enum IncomeNavigationRoutes {
  VALUE = "@INCOME_NAVIGATION/VALUE",
  CATEGORY = "@INCOME_NAVIGATION/CATEGORY",
  DATE = "@INCOME_NAVIGATION/DATE",
  CONFIRMATION = "@INCOME_NAVIGATION/CONFIRMATION",
}

export type IncomeNavigationParams = {
  [IncomeNavigationRoutes.VALUE]: IncomeValueParams;
};

export type IncomeNavigationScreenProps<
  RouteName extends keyof IncomeNavigationParams,
> = StackScreenProps<IncomeNavigationParams, RouteName>;

const IncomeNavigationStack = createStackNavigator<IncomeNavigationParams>();

export const IncomeNavigation = () => {
  return (
    <IncomeNavigationStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={IncomeNavigationRoutes.VALUE}>
      <IncomeNavigationStack.Screen
        name={IncomeNavigationRoutes.VALUE}
        component={IncomeValue}
      />
    </IncomeNavigationStack.Navigator>
  );
};
