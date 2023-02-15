import React from "react";

import {
  IncomeNavigationScreenProps,
  IncomeNavigationRoutes,
} from "../../navigation";

import { IncomeValueView } from "./IncomeValue.view";

export type IncomeValueParams = undefined;

export const IncomeValueContainer: React.FC<
  IncomeNavigationScreenProps<IncomeNavigationRoutes.VALUE>
> = () => {
  return <IncomeValueView />;
};
