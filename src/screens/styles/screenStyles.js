import { StyleSheet, useWindowDimensions } from 'react-native';

const { width : screenWidth, height : screenHeight } = useWindowDimensions();

const screenStyles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: "column",
    alignItems: 'center', 
    justifyContent: 'center',
    // width : screenWidth
  }
});

export default screenStyles;