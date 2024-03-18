import React from "react"
import { TouchableOpacity } from 'react-native';

import Svg, { Rect, Path } from "react-native-svg"


const LoginWithTextButton = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress }>
        <Svg width={340} height={39} viewBox="0 0 130 39" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Rect width={340} height={38.917} fill="#F4EB64" rx={5} />
            <Path
                fill="#5352D4"
                d="M148.609 23.185h12.57v1.62h-12.57v-1.62Zm5.265-2.625h1.995v3.285h-1.995V20.56Zm-3.855-7.215h9.75v4.62h-7.74v2.34h-1.98v-3.9h7.74V14.92h-7.77v-1.575Zm.03 6.165h10.035v1.605h-10.035V19.51Zm13.634-5.79h8.805v1.575h-8.805V13.72Zm-1.275 9.18h12.555v1.62h-12.555V22.9Zm9.03-9.18h1.98v1.65c0 1.95 0 3.84-.495 6.69l-1.995-.165c.51-2.67.51-4.65.51-6.525v-1.65Zm14.294-1.26h2.01v9.975h-2.01V12.46Zm-7.245 12.045h9.6v1.59h-9.6v-1.59Zm0-3.075h1.995v3.72h-1.995v-3.72Zm1.695-8.1c2.13 0 3.765 1.47 3.765 3.525 0 2.04-1.635 3.525-3.765 3.525s-3.78-1.485-3.78-3.525c0-2.055 1.65-3.525 3.78-3.525Zm0 1.725c-1.035 0-1.83.66-1.83 1.8 0 1.125.795 1.785 1.83 1.785 1.02 0 1.815-.66 1.815-1.785 0-1.14-.795-1.8-1.815-1.8Z"
            />
        </Svg>
    </TouchableOpacity>
)
export default LoginWithTextButton;