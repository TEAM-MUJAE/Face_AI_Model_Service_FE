import { Text, View } from 'react-native';


import ScreenTitle from '../Common/ScreenTitle';
import CelebResultBanner from './CelebResultBanner';
import BackWithTextButton from '../../static/Svg/BackWithTextButton';


function CompareCelebResponse() {

  const goHomeScreenPressHandler = () => {
    console.log('Go To Home Screen Button clicked!');
  }

  return (
    <View>
      <ScreenTitle />
      <Text>유사하다고 생각하는 인물과 어떻게 닮았는지 자세히 알려드릴게요!</Text>
      <BackWithTextButton key="goHomeScreen" onPress={ goHomeScreenPressHandler } />
      <CelebResultBanner />
    </View>
    );
  }
  
  export default CompareCelebResponse;