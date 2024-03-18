import { Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';


import LoginIcon from '../../static/Svg/LoginIcon';
import LogoutIcon from '../../static/Svg/LogoutIcon';
import UserSettingsIcon from '../../static/Svg/UserSettingsIcon';
import { useDispatch } from 'react-redux';
import { setChangedTitleText } from '../../features/titleSlice';


function Header() {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const loginPressHandler = () => {
    console.log('Login Button clicked!');
    dispatch(setChangedTitleText('로그인'));
    navigation.navigate('Login');
  }

  const logoutPressHandler = () => {
    console.log('Logout Button clicked!');
    navigation.navigate('Home');
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