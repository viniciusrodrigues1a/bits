import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { StackNavigation } from "./Stack";

export const RootNavigationContainer = () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);
