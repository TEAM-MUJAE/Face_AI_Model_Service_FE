import React from "react"
import { TouchableOpacity } from 'react-native';

import Svg, { Rect, Path } from "react-native-svg"


const BackButton = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress }>
        <Svg width={41} height={41} viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Rect
                width={41}
                height={41}
                x={1.5}
                y={1.5}
                stroke="#000"
                strokeWidth={3}
                rx={3.5}
            />
            <Path
                fill="#000"
                d="M38.5 20.167H11.759l9.704-9.704L18.87 7.87 4.742 22l14.13 14.129 2.592-2.593-9.704-9.704H38.5v-3.666Z"
            />
        </Svg>
    </TouchableOpacity>
)
export default BackButton;