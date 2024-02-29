import React from "react"
import { TouchableOpacity } from 'react-native';

import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"


const CompareMultiButton = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress }>
        <Svg width={246} height={47} viewBox="0 0 246 47" xmlns="http://www.w3.org/2000/svg" fill="none">
            <G clipPath="url(#a)">
                <Path
                    fill="#F4EB64"
                    d="M0 3a3 3 0 0 1 3-3h231v47H3a3 3 0 0 1-3-3V3ZM234 0h9a3 3 0 0 1 3 3v32h-12V0Z"
                />
                <Path fill="#F4EB64" d="m222 35 12.02-12.02L246.043 35 234.02 47.02z" />
                <Path
                    fill="#5352D4"
                    d="M40.312 23.369h1.463v1.936h-1.463v-1.936Zm-2.728-2.244h6.996v1.144h-6.996v-1.144Zm0-1.991h6.908v1.155h-5.456v1.452h-1.452v-2.607Zm-1.144 3.663h9.207v1.155H36.44v-1.155Zm1.056 1.804h7.04v2.618h-5.588v.891h-1.441v-1.903h5.588v-.528h-5.599v-1.078Zm.011 3.212H44.8v1.1h-7.293v-1.1Zm14.024-3.905h1.463v1.793h-1.463v-1.793Zm-3.872-.484h9.207v1.155H47.66v-1.155Zm4.587 1.881c2.2 0 3.531.66 3.531 1.837s-1.33 1.837-3.53 1.837c-2.212 0-3.543-.66-3.543-1.837s1.331-1.837 3.542-1.837Zm0 1.1c-1.364 0-2.057.231-2.057.737 0 .495.693.737 2.057.737 1.364 0 2.057-.242 2.057-.737 0-.506-.693-.737-2.057-.737Zm-.99-6.655h1.298v.253c0 1.529-1.375 2.783-4.004 3.025l-.506-1.144c2.233-.187 3.212-1.089 3.212-1.881v-.253Zm.715 0h1.298v.253c0 .803.968 1.694 3.212 1.881l-.506 1.144c-2.618-.242-4.004-1.485-4.004-3.025v-.253Zm-3.476-.539h7.546v1.155h-7.546v-1.155Zm14.453 3.333h1.672v1.177h-1.672v-1.177Zm3.29-3.751h1.396v10.186h-1.397V18.793Zm-2.08.154h1.375v9.57h-1.375v-9.57Zm-2.992.561c1.353 0 2.222 1.397 2.222 3.696 0 2.31-.869 3.707-2.222 3.707-1.342 0-2.2-1.397-2.2-3.707 0-2.299.858-3.696 2.2-3.696Zm0 1.375c-.55 0-.869.77-.869 2.321 0 1.562.32 2.321.87 2.321.571 0 .89-.759.89-2.321 0-1.551-.319-2.321-.89-2.321Zm14.72 1.078h7.128v1.166h-7.128v-1.166Zm-1.133 2.321h9.218v1.177h-9.218v-1.177Zm3.828.704h1.463v3.993h-1.463v-3.993Zm-2.695-5.742h1.463v3.267h-1.463v-3.267Zm11.132.143h6.39v1.155h-6.39v-1.155Zm-1.046 4.334h9.208v1.177h-9.208v-1.177Zm3.818.825h1.473v4.444H89.79v-4.444Zm2.87-5.159h1.442v.902c0 1.1 0 2.332-.397 4.136l-1.44-.165c.395-1.705.395-2.915.395-3.971v-.902Zm6.809 4.565h1.463v2.409h-1.463v-2.409Zm.715-4.565c1.573 0 2.772 1.045 2.772 2.508s-1.199 2.508-2.772 2.508c-1.584 0-2.772-1.045-2.772-2.508s1.188-2.508 2.772-2.508Zm0 1.243c-.77 0-1.342.462-1.342 1.265 0 .792.572 1.265 1.342 1.265.77 0 1.342-.473 1.342-1.265 0-.803-.572-1.265-1.342-1.265Zm3.575-1.837h1.463v10.186h-1.463V18.793Zm1.012 3.982h1.793v1.221h-1.793v-1.221Zm-7.524 4.18-.176-1.177c1.76-.011 4.136 0 6.16-.275l.11 1.067c-2.112.396-4.378.396-6.094.385Zm16.282-1.606h.825c1.804 0 2.981-.044 4.301-.286l.143 1.177c-1.364.253-2.585.308-4.444.308h-.825v-1.199Zm0-5.654h4.609v1.166h-3.146V25.8h-1.463v-6.105Zm6.611-.902h1.463v10.219h-1.463V18.793Zm-2.497 3.509h3.113v1.188h-3.113v-1.188Zm11.618.352h.847c2.123 0 3.278-.066 4.565-.341l.154 1.144c-1.309.286-2.541.341-4.719.341h-.847v-1.144Zm0-3.311h4.554v1.144h-3.102v2.662h-1.452v-3.806Zm6.204-.55h1.463v5.401h-1.463v-5.401Zm1.056 2.134h1.76v1.188h-1.76v-1.188Zm-6.831 3.685h3.344v2.574h-1.914v1.111h-1.419v-2.112h1.914v-.517h-1.925v-1.056Zm3.861 0h3.377v4.257h-3.377v-4.257Zm2.123 1.056h-.869v2.134h.869v-2.134Zm-5.973 2.112h.605c1.199 0 1.936 0 2.893-.154l.11 1.078c-.99.165-1.76.165-3.003.165h-.605V27.78Zm13.265-8.448c1.573 0 2.772 1.023 2.772 2.464s-1.199 2.475-2.772 2.475c-1.573 0-2.772-1.034-2.772-2.475s1.199-2.464 2.772-2.464Zm0 1.221c-.77 0-1.342.462-1.342 1.243 0 .792.572 1.243 1.342 1.243.77 0 1.342-.451 1.342-1.243 0-.781-.572-1.243-1.342-1.243Zm3.718-1.76h1.463v5.687h-1.463v-5.687Zm1.056 2.178h1.76v1.188h-1.76v-1.188Zm-5.456 3.938h1.089v.374c0 1.562-.66 2.992-2.244 3.575l-.726-1.067c1.331-.473 1.881-1.507 1.881-2.508v-.374Zm.363 0h1.056v.374c0 1.012.484 2.068 1.749 2.596l-.605 1.078c-1.617-.616-2.2-2.156-2.2-3.674v-.374Zm3.344 0h1.056v.374c0 1.419-.594 3.036-2.2 3.674l-.605-1.078c1.254-.572 1.749-1.683 1.749-2.596v-.374Zm.341 0h1.1v.374c0 1.078.539 2.068 1.87 2.508l-.715 1.067c-1.606-.572-2.255-1.947-2.255-3.575v-.374Zm9.624-5.973c2.321 0 3.685.616 3.685 1.738 0 1.122-1.364 1.738-3.685 1.738-2.332 0-3.685-.616-3.685-1.738 0-1.122 1.353-1.738 3.685-1.738Zm0 1.067c-1.474 0-2.167.22-2.167.671 0 .473.693.671 2.167.671 1.474 0 2.167-.198 2.167-.671 0-.451-.693-.671-2.167-.671Zm-4.609 2.882h9.207v1.155h-9.207v-1.155Zm1.056 1.727h7.04v2.618h-5.588v.902h-1.441v-1.914h5.588v-.517h-5.599v-1.089Zm.011 3.201h7.293v1.1h-7.293v-1.1Zm16.785-9.02h1.463v10.186h-1.463V18.793Zm1.012 3.982h1.771v1.21h-1.771v-1.21Zm-6.006-2.948h1.364c0 2.827-.264 4.994-2.068 7.018l-1.144-.825c1.573-1.738 1.848-3.432 1.848-6.017v-.176Zm-1.397 0h1.969v1.188h-1.969v-1.188Zm4.202 0h1.364c0 2.959-.242 5.456-2.013 7.667l-1.144-.814c1.54-1.947 1.793-3.905 1.793-6.688v-.165Zm-1.1 0h1.705v1.188h-1.705v-1.188Zm13.488 6.039v-.858c0-.293.07-.561.209-.803.147-.242.341-.433.583-.572.242-.147.51-.22.803-.22h2.497v-1.65h-5.159V20.08h5.236c.294 0 .561.073.803.22.242.14.437.33.583.572.147.242.22.51.22.803v1.826c0 .293-.073.561-.22.803a1.7 1.7 0 0 1-.583.583c-.242.147-.509.22-.803.22h-2.475v.759h-1.694Zm0 2.134v-1.683h1.694V28h-1.694Z"
                />
                <Path stroke="#5352D4" strokeWidth={1.5} d="m211 19.5-6 6m6-6h-5m5 0v5" />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M0 0h246v47H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    </TouchableOpacity>
)
export default CompareMultiButton;