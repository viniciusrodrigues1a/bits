import React from "react";

import {
  HomeNavigationRoutes,
  HomeNavigationScreenProps,
} from "../../navigation";

import { HomeView } from "./Home.view";

export type HomeParams = undefined;

export const HomeContainer: React.FC<
  HomeNavigationScreenProps<HomeNavigationRoutes.HOME>
> = ({ navigation, route }) => {
  return <HomeView />;
};
