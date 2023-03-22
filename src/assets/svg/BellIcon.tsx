import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { SvgProps } from "./types";
const SvgComponent = ({ color, size }: SvgProps) => (
    <Svg
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
            d="M18 13.18V10a6 6 0 0 0-5-5.91V3a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 10v3.18A3 3 0 0 0 4 16v2a1 1 0 0 0 1 1h3.14a4 4 0 0 0 7.72 0H19a1 1 0 0 0 1-1v-2a3 3 0 0 0-2-2.82ZM8 10a4 4 0 0 1 8 0v3H8v-3Zm4 10a2 2 0 0 1-1.72-1h3.44A2 2 0 0 1 12 20Zm6-3H6v-1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1Z"
            fill={color}
        />
    </Svg>
);

export default SvgComponent;