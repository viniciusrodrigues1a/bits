import React from "react";

import * as SvgIconList from "@/assets/svg";

export type IconProps = {
  size: string | number;
  color: string;
  name: keyof typeof SvgIconList;
};

export const Icon = ({ name, color, size }: IconProps) => {
  if (!(name in SvgIconList)) {
    return null;
  }

  const Component = SvgIconList[name];

  return <Component color={color} size={size} />;
};
