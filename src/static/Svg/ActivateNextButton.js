import React from "react"
import {StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Svg, { Rect, Path } from "react-native-svg"


const ActivateNextButton = ({ onPress }) => (
    <View style={styles.container}>
    <TouchableOpacity onPress={ onPress } style={styles.button}>
        {/* <Svg width={340} height={39} viewBox="0 0 130 39" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Rect width={340} height={38.917} fill="#F4EB64" rx={5} />
            <Path
                fill="#5352D4"
                d="M164.374 12.43h2.01v13.935h-2.01V12.43Zm1.56 5.145h2.46v1.635h-2.46v-1.635Zm-9.9 3.795h1.17c2.34 0 4.185-.075 6.225-.435l.195 1.65c-2.1.375-4.005.435-6.42.435h-1.17v-1.65Zm0-7.65h6.48v1.605h-4.5v6.84h-1.98V13.72Zm19.543-1.02c3.06 0 5.025 1.035 5.025 2.715s-1.965 2.7-5.025 2.7c-3.06 0-5.025-1.02-5.025-2.7 0-1.68 1.965-2.715 5.025-2.715Zm0 1.545c-1.905 0-2.97.375-2.97 1.17 0 .78 1.065 1.17 2.97 1.17 1.89 0 2.97-.39 2.97-1.17 0-.795-1.08-1.17-2.97-1.17Zm-4.83 7.2h9.6v4.74h-9.6v-4.74Zm7.65 1.575h-5.685v1.59h5.685v-1.59Zm-9.105-4.11h12.555v1.575h-12.555V18.91Z"
            />
        </Svg> */}
            <Text style={styles.buttonText}>다음</Text>
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

export default ActivateNextButton;