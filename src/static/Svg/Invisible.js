import React from "react"
import { TouchableOpacity } from 'react-native';

import Svg, { Path } from "react-native-svg"


const Invisible = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress }>
        <Svg width={60} height={60} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={5}
                d="M7.5 25a33.392 33.392 0 0 0 7.5 6.712m0 0a28.188 28.188 0 0 0 10 4.063c3.303.635 6.697.635 10 0a28.188 28.188 0 0 0 10-4.063m-30 0-3.75 4.538M52.5 25a33.392 33.392 0 0 1-7.5 6.712m0 0 3.75 4.538M25 35.773l-1.25 5.477M35 35.773l1.25 5.477"
            />
        </Svg>
    </TouchableOpacity>
)
export default Invisible;