import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';



function RegistrationResult() {

    const navigation = useNavigation();

    const registerResData = useSelector(state => state.memberData.registerResData);
    console.log("registerResData", registerResData);

    const registerMessage = registerResData.message[0];
    console.log("registerMessage", registerMessage);

    const {message} = registerResData;
    console.log("message", message);
    const messageKeyCount = Object.keys(registerMessage).length;


    const buttonText = messageKeyCount === 1 ? '로그인 하기' : '돌아가기'
    const resultMessage = registerMessage.message
    console.log("resultMessage", resultMessage);

    const buttonPressHandler = () => {
        if (messageKeyCount === 1) {
            navigation.navigate('Login', {
                title: '로그인',
                navigateFrom: 'RegistrationResult'     
            });
        } else {
            navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            {message && <Text style={styles.text}>{`${message}`}</Text>}
            <TouchableOpacity onPress={buttonPressHandler} style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 20, 
        marginBottom: 10, 
        color: '#6F50F8', 
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
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

export default RegistrationResult;