import { StyleSheet, Dimensions } from 'react-native';


const { width : screenWidth, height : screenHeight } = Dimensions.get('window');


const screenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth
  },
  header: {
    flex: 1,
    width: screenWidth
  },
  content: {
    flex: 5,
    width: screenWidth
  }
});

export default screenStyles;