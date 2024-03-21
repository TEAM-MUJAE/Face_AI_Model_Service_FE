import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';



function RegistrationComplete() {

    const navigation = useNavigation();

    const registerMessage = useSelector(state => state.memberData.registerResData);
    console.log(registerMessage);
    const completeMessage = registerMessage.message

    const loginPressHandler = () => {
        navigation.navigate('Login', {
            title: '로그인'
        });
    }

    return (
        <View style={styles.container}>
            {registerMessage && <Text style={styles.text}>{`${completeMessage}`}</Text>}
            <TouchableOpacity onPress={loginPressHandler} style={styles.button}>
                <Text style={styles.buttonText}>로그인 하기</Text>
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
        fontWeight: 'bold'

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

export default RegistrationComplete;