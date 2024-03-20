import React, { useEffect } from 'react';
import { Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';


import LoginIcon from '../../static/Svg/LoginIcon';
import LogoutIcon from '../../static/Svg/LogoutIcon';
import UserSettingsIcon from '../../static/Svg/UserSettingsIcon';


function Header() {

  const navigation = useNavigation();

  const loginPressHandler = () => {
    console.log('Login Button clicked!');
    navigation.navigate('Login', {
      title: '로그인'
    });
  }

  const logoutPressHandler = () => {
    console.log('Logout Button clicked!');
    navigation.navigate('Home', {
      title: '홈 화면'
    });
  }

  const userSettingsPressHandler = () => {
    console.log('UserSettings Button clicked!');
    // navigation.navigate('UserSettings');
  }


  return (
    <View>
      <Text>일반인이었던 내가!</Text>
      <Text>알고보니 ○○○?</Text>
      <LoginIcon key="login" onPress={ loginPressHandler } />
      <LogoutIcon key="logout" onPress={ logoutPressHandler } />
      <UserSettingsIcon key="userSettings" onPress={ userSettingsPressHandler } />
    </View>
  );
}

export default Header;