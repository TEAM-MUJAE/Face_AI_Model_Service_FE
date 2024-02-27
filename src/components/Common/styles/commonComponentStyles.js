import { StyleSheet, useWindowDimensions } from 'react-native';

const { width : screenWidth, height : screenHeight } = useWindowDimensions();

const commonComponentStyles = StyleSheet.create({
    contentContainer: {
        flex: 5,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#5352D4",
        // width : screenWidth
    }
});

export default commonComponentStyles;