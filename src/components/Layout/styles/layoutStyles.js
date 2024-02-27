import { StyleSheet } from 'react-native';

const layoutStyles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#5352D4"
    },
    contentContainer: {
        flex: 5,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: "#5352D4"
    },
    mainTitle: {
        color: "white",
        fontSize: 48,
        fontWeight: "bold"
    },
    subTitle: {
        color: "white",
        fontSize: 24
    },
    contentText: {
        color: "white",
        fontSize: 24
    }
});

export default layoutStyles;