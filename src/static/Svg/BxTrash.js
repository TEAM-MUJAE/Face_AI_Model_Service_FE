import React from "react"
import { TouchableOpacity } from "react-native";

import Svg, { Path } from "react-native-svg"

const BxTrash = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress }>
        <Svg xmlns="http://www.w3.org/2000/svg" fill="none" width={24} height={24} viewBox="0 0 24 24" >
            <Path
            fill="#2B4EA2"
            d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2v12ZM9 4h6v2H9V4ZM8 8h9v12H7V8h1Z"
            />
            <Path fill="#2B4EA2" d="M9 10h2v8H9v-8Zm4 0h2v8h-2v-8Z" />
        </Svg>
    </TouchableOpacity>
)

export default BxTrash;