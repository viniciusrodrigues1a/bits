import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { SvgProps } from "./types";

function SvgComponent({ color, size, rotation }: SvgProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      rotation={rotation ?? 0}>
      <Path
        d="M8.473 10.86l3.767-3.773a.666.666 0 00-.47-1.141.667.667 0 00-.47.194l-3.334 3.3-3.3-3.3a.667.667 0 00-1.087.217.667.667 0 000 .513.667.667 0 00.147.217l3.767 3.773a.666.666 0 00.98 0z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
