import React from "react"
import {View,StyleSheet, TouchableOpacity,Text } from 'react-native';

import Svg, { Rect, Path } from "react-native-svg"


const BackWithTextButton = ({ onPress }) => (
    <View style={styles.container}>
  <TouchableOpacity onPress={ onPress } style={styles.button}>
        {/* <Svg width={130} height={39} viewBox="0 0 130 39" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Rect width={130} height={39} fill="#F4EB64" rx={5} />
            <Path
            fill="#5352D4"
            d="M65.586 16.913h1.463v1.947h-1.463v-1.947Zm-2.728-.54h6.996v1.144h-6.996v-1.143Zm0-1.99h6.908v1.155H64.31v1.451h-1.452v-2.607Zm-1.144 3.784h9.207v1.143h-9.207v-1.143Zm1.056 1.682h7.04v2.619h-5.588v.89H62.78v-1.902h5.588v-.529h-5.6V19.85Zm.01 3.212h7.294v1.1H62.78v-1.1Zm11.781-8.316c1.551 0 2.673 1.409 2.673 3.63 0 2.244-1.122 3.652-2.673 3.652-1.55 0-2.673-1.408-2.673-3.652 0-2.221 1.122-3.63 2.673-3.63Zm0 1.332c-.759 0-1.265.802-1.265 2.298 0 1.518.506 2.332 1.265 2.332.76 0 1.276-.814 1.276-2.332 0-1.495-.517-2.299-1.276-2.299Zm3.784-2.036h1.474v10.186h-1.474V14.041Zm1.144 3.84h1.804v1.21H79.49v-1.21Zm8.975-3.85h1.474v10.185h-1.474V14.03Zm1.09 3.893h1.792v1.2h-1.793v-1.2Zm-3.763-2.838h1.43c0 3.059-1.166 5.676-4.554 7.382l-.814-1.111c2.673-1.386 3.938-3.256 3.938-6.018v-.253Zm-3.377 0h4.125v1.178h-4.125v-1.178Zm16.675-1.045h1.474v10.186h-1.474V14.041Zm-3.003 1.056h1.452c0 3.114-1.056 5.665-4.675 7.415l-.759-1.166c2.926-1.409 3.982-3.256 3.982-5.985v-.264Zm-3.443 0h4.136v1.156h-4.136v-1.155ZM35.031 13.17l-1.094.856a8.132 8.132 0 0 0-6.42-3.132 8.145 8.145 0 0 0-8.149 8.141 8.149 8.149 0 0 0 15.807 2.803.156.156 0 0 0-.095-.2l-1.1-.379a.156.156 0 0 0-.196.093 6.643 6.643 0 0 1-1.545 2.412 6.632 6.632 0 0 1-4.718 1.956 6.625 6.625 0 0 1-4.718-1.955 6.642 6.642 0 0 1-1.954-4.722 6.642 6.642 0 0 1 1.954-4.722 6.632 6.632 0 0 1 4.718-1.956 6.625 6.625 0 0 1 4.718 1.956c.192.192.372.396.54.61l-1.169.912a.156.156 0 0 0 .058.273l3.408.835a.156.156 0 0 0 .192-.15l.016-3.51a.156.156 0 0 0-.253-.12Z"
            />
        </Svg> */}
        <Text style={styles.buttonText}>돌아가기</Text>
    </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
      // backgroundColor: 'red',
    },
    button: {
      width: '80%',
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
      backgroundColor: '#6F50F8',
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
    },
  });


export default BackWithTextButton;