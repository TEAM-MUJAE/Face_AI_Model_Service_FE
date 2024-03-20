import React from "react"
import { TouchableOpacity } from 'react-native';

import Svg, { Rect, Path } from "react-native-svg"


const BackToLoginButton = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress }>
        <Svg width={340} height={39} viewBox="0 0 130 39" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Rect width={340} height={38.917} fill="#F4EB64" rx={5} />
            <Path
                fill="#5352D4"
                d="M91.59 23.185h12.57v1.62H91.59v-1.62Zm5.265-2.625h1.995v3.285h-1.995V20.56ZM93 13.345h9.75v4.62h-7.74v2.34h-1.98v-3.9h7.74V14.92H93v-1.575Zm.03 6.165h10.035v1.605H93.03V19.51Zm13.634-5.79h8.805v1.575h-8.805V13.72Zm-1.275 9.18h12.555v1.62h-12.555V22.9Zm9.03-9.18h1.98v1.65c0 1.95 0 3.84-.495 6.69l-1.995-.165c.51-2.67.51-4.65.51-6.525v-1.65Zm14.294-1.26h2.01v9.975h-2.01V12.46Zm-7.245 12.045h9.6v1.59h-9.6v-1.59Zm0-3.075h1.995v3.72h-1.995v-3.72Zm1.695-8.1c2.13 0 3.765 1.47 3.765 3.525 0 2.04-1.635 3.525-3.765 3.525s-3.78-1.485-3.78-3.525c0-2.055 1.65-3.525 3.78-3.525Zm0 1.725c-1.035 0-1.83.66-1.83 1.8 0 1.125.795 1.785 1.83 1.785 1.02 0 1.815-.66 1.815-1.785 0-1.14-.795-1.8-1.815-1.8Zm13.019 5.61h1.995v2.25h-1.995v-2.25Zm5.835-8.22h2.01v13.89h-2.01v-13.89Zm1.305 5.64h2.445v1.65h-2.445v-1.65Zm-10.26 5.94-.24-1.605c2.4 0 5.7-.015 8.505-.405l.15 1.44c-2.925.57-6.075.57-8.415.57Zm.015-10.05h8.175v1.56h-8.175v-1.56Zm4.11 2.115c1.98 0 3.39 1.05 3.39 2.595 0 1.56-1.41 2.61-3.39 2.61-1.995 0-3.39-1.05-3.39-2.61 0-1.545 1.395-2.595 3.39-2.595Zm0 1.5c-.915 0-1.5.39-1.5 1.095 0 .72.585 1.11 1.5 1.11.9 0 1.5-.39 1.5-1.11 0-.705-.6-1.095-1.5-1.095Zm-1.005-5.07h1.995v2.625h-1.995V12.52Zm17.293 2.1h3.495v1.59h-3.495v-1.59Zm0 2.985h3.555v1.59h-3.555v-1.59Zm-6.135-4.05h6.57v6.795h-6.57v-6.795Zm4.605 1.575h-2.64v3.66h2.64v-3.66Zm4.455-2.67h1.995v10.11H156.4V12.46Zm-7.2 12.045h9.495v1.59H149.2v-1.59Zm0-2.895h2.01v3.72h-2.01v-3.72Zm17.654-8.475c2.925 0 5.19 1.605 5.19 4.02 0 2.43-2.265 4.02-5.19 4.02-2.925 0-5.19-1.59-5.19-4.02 0-2.415 2.265-4.02 5.19-4.02Zm0 1.62c-1.89 0-3.24.9-3.24 2.4 0 1.485 1.35 2.385 3.24 2.385 1.89 0 3.24-.9 3.24-2.385 0-1.5-1.35-2.4-3.24-2.4Zm-6.27 8.28h12.57v1.635h-12.57v-1.635Zm13.799.15h12.57v1.62h-12.57v-1.62Zm5.265-2.625h1.995v3.285h-1.995V20.56Zm-3.855-7.215h9.75v4.62h-7.74v2.34h-1.98v-3.9h7.74V14.92h-7.77v-1.575Zm.03 6.165h10.035v1.605h-10.035V19.51Zm21.271-3.15h1.995v2.655h-1.995V16.36Zm-3.72-.735h9.54v1.56h-9.54v-1.56Zm0-2.715h9.42v1.575h-7.44v1.98h-1.98V12.91Zm-1.56 5.16h12.555v1.56h-12.555v-1.56Zm1.44 2.295h9.6v3.57h-7.62v1.215h-1.965v-2.595h7.62v-.72h-7.635v-1.47Zm.015 4.38h9.945v1.5h-9.945v-1.5Zm16.064-11.34c2.115 0 3.645 1.92 3.645 4.95 0 3.06-1.53 4.98-3.645 4.98s-3.645-1.92-3.645-4.98c0-3.03 1.53-4.95 3.645-4.95Zm0 1.815c-1.035 0-1.725 1.095-1.725 3.135 0 2.07.69 3.18 1.725 3.18 1.035 0 1.74-1.11 1.74-3.18 0-2.04-.705-3.135-1.74-3.135Zm5.16-2.775h2.01v13.89h-2.01v-13.89Zm1.56 5.235h2.46v1.65h-2.46v-1.65Zm12.239-5.25h2.01v13.89h-2.01V12.43Zm1.485 5.31h2.445v1.635h-2.445V17.74Zm-5.13-3.87h1.95c0 4.17-1.59 7.74-6.21 10.065l-1.11-1.515c3.645-1.89 5.37-4.44 5.37-8.205v-.345Zm-4.605 0h5.625v1.605h-5.625V13.87Zm22.739-1.425h2.01v13.89h-2.01v-13.89Zm-4.095 1.44h1.98c0 4.245-1.44 7.725-6.375 10.11l-1.035-1.59c3.99-1.92 5.43-4.44 5.43-8.16v-.36Zm-4.695 0h5.64v1.575h-5.64v-1.575Z"
            />
        </Svg>
    </TouchableOpacity>
)
export default BackToLoginButton;