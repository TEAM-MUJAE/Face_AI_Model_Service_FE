import React from "react"
import { Text,StyleSheet,TouchableOpacity } from 'react-native';

import Svg, { Rect, Path } from "react-native-svg"


const SignUpButton = ({ onPress }) => (
    <TouchableOpacity onPress={ onPress } style={styles.button} >
        {/* <Svg width={340} height={39} viewBox="0 0 130 39" xmlns="http://www.w3.org/2000/svg" fill="none">
            <Rect width={340} height={38.917} fill="#F4EB64" rx={5} />
            <Path
                fill="#5352D4"
                d="M150.575 12.43h2.01v13.89h-2.01V12.43Zm1.485 5.31h2.445v1.635h-2.445V17.74Zm-5.13-3.87h1.95c0 4.17-1.59 7.74-6.21 10.065l-1.11-1.515c3.645-1.89 5.37-4.44 5.37-8.205v-.345Zm-4.605 0h5.625v1.605h-5.625V13.87Zm22.709-1.425h2.01v7.47h-2.01v-7.47Zm-7.23 8.07h1.965v1.29h5.295v-1.29h1.98v5.67h-9.24v-5.67Zm1.965 2.82v1.26h5.295v-1.26h-5.295Zm-.285-10.32c2.16 0 3.765 1.365 3.765 3.285 0 1.92-1.605 3.285-3.765 3.285s-3.78-1.365-3.78-3.285c0-1.92 1.62-3.285 3.78-3.285Zm0 1.65c-1.065 0-1.83.615-1.83 1.635 0 1.035.765 1.635 1.83 1.635 1.05 0 1.815-.6 1.815-1.635 0-1.02-.765-1.635-1.815-1.635Zm18.718-2.22h1.98v13.89h-1.98v-13.89Zm1.53 5.415h2.46v1.665h-2.46V17.86Zm-10.5-3.36h8.085v1.59h-8.085V14.5Zm4.065 2.37c2.025 0 3.525 1.38 3.525 3.315s-1.5 3.315-3.525 3.315-3.525-1.38-3.525-3.315 1.5-3.315 3.525-3.315Zm0 1.62c-.945 0-1.62.63-1.62 1.695s.675 1.695 1.62 1.695c.945 0 1.62-.63 1.62-1.695s-.675-1.695-1.62-1.695Zm-1.005-5.82h1.995v2.43h-1.995v-2.43Zm20.369-.225h2.01v13.89h-2.01v-13.89Zm-4.095 1.44h1.98c0 4.245-1.44 7.725-6.375 10.11l-1.035-1.59c3.99-1.92 5.43-4.44 5.43-8.16v-.36Zm-4.695 0h5.64v1.575h-5.64v-1.575Z"
            />
        </Svg> */}
        <Text style={styles.buttonText}>가입하기</Text>
    </TouchableOpacity>
)
const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20, // Adjust as needed
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        color: '#6F50F8',
        fontWeight: 'bold',
        position: 'absolute', // This makes the header centered regardless of the buttons
        width: '100%',
        textAlign: 'center', // Center the text
    },
    inputGroup: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
    },
    inputGroup1: {
        flexDirection: 'row',
        width: '100%',
        height: 65,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        margin: 10,
    },
    inputGroup2: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 1,
        height: 65,
        borderRadius: 5,
        borderColor: 'red',
        margin: 10,
    },
    input: {
        flex: 1,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 15,
        marginRight: 10, 
        borderWidth: 0,
    },
    checkButton: {
        backgroundColor: '#6F50F8',
        borderRadius: 5,
        justifyContent: 'center',
        padding: 15,
    },
    checkButtonText: {
        color: 'white',
    },
    button: {
        width: '100%',
        padding: 15,
        marginTop: 10,
        backgroundColor: '#6F50F8',
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
export default SignUpButton;