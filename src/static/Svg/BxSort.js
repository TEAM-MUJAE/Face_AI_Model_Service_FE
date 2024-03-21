import React from "react"
import { StyleSheet, View } from "react-native";

import Svg, { Path } from "react-native-svg"

const BxSort = (props) => (
  <View style={styles.container}>
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <Path fill="none" d="M0 35V0h35v35z" />
      <Path
        fill="red"
        d="M23.333 23.333v5.834l8.75-8.75H2.917v2.916h20.416Zm-16.041-8.75h24.791v-2.917H11.667V5.833l-8.75 8.75h4.375Z"
      />
    </Svg>
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    // padding: 20,
    // backgroundColor: "red",
  
}})

export default BxSort;