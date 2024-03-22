import React from "react"
import { TouchableOpacity } from 'react-native';

import Svg, { Path } from "react-native-svg"


const Visible = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress }>
        <Svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Path
                stroke="#999"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.75 15C10.5 5 19.5 5 26.25 15 19.5 25 10.5 25 3.75 15Z"
            />
            <Path
                stroke="#999"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M18.75 15a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
        </Svg>
    </TouchableOpacity>
)
export default Visible;