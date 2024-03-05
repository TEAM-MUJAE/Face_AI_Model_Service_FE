import React from "react"

import Svg, { Path } from "react-native-svg"

const BxSort = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path fill="#5352D4" d="M0 35V0h35v35z" />
    <Path
      fill="#F4EB64"
      d="M23.333 23.333v5.834l8.75-8.75H2.917v2.916h20.416Zm-16.041-8.75h24.791v-2.917H11.667V5.833l-8.75 8.75h4.375Z"
    />
  </Svg>
)

export default BxSort;