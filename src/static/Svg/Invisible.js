import React from "react"
import { TouchableOpacity } from 'react-native';

import Svg, { Path } from "react-native-svg"


const Invisible = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress }>
        <Svg width={30} height={30} viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Path
                stroke="#999"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.75 12.5a16.698 16.698 0 0 0 3.75 3.356m0 0a14.095 14.095 0 0 0 5 2.031c1.652.318 3.348.318 5 0a14.095 14.095 0 0 0 5-2.03m-15 0-1.875 2.268M26.25 12.5a16.699 16.699 0 0 1-3.75 3.356m0 0 1.875 2.269M12.5 17.886l-.625 2.739m5.625-2.739.625 2.739"
            />  
        </Svg>
    </TouchableOpacity>
)
export default Invisible;