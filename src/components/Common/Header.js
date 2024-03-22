import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LogoutIcon from '../../static/Svg/LogoutIcon';
import LogoImage from '../../static/img/logo/logo.png';

function Header() {
  const navigation = useNavigation();

  const logoutPressHandler = () => {
    console.log('Logout Button clicked!');

    Alert.alert('로그아웃', '로그아웃 하시겠습니까?', [
        {
          text: '취소',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: '확인', 
          onPress: () => navigation.navigate('Login', {
            title: '로그인',
            navigateFrom: 'Header',
          }) 
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ width: 50 }}></View> 
      <View style={styles.centerContainer}>
        <Image source={LogoImage} style={styles.logo} />
        <Text style={styles.title}>AlGo보니?</Text>
      </View>
        <LogoutIcon key='logout' onPress={logoutPressHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#ffffff',
  },
  centerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    color: '#6F50F8',
    fontWeight: 'bold',
  },
});

export default Header;