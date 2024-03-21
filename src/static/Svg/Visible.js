import React from "react"
import { TouchableOpacity } from 'react-native';

import Svg, { Path } from "react-native-svg"


const Visible = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress }>
        <Svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth={5}
                d="M7.5 30C21 10 39 10 52.5 30 39 50 21 50 7.5 30Z"
            />
            <Path
                stroke="#000"
                strokeLinejoin="round"
                strokeWidth={5}
                d="M37.5 30a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
            />
        </Svg>
    </TouchableOpacity>
)
export default Visible;