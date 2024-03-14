import { Text, View } from 'react-native';


import { useSelector } from 'react-redux';


import ScreenTitle from '../Common/ScreenTitle';
import CelebResultBanner from './CelebResultBanner';
import BackWithTextButton from '../../static/Svg/BackWithTextButton';
import TwoResultContent from '../Common/TwoResultContent';


function CompareCelebResponse() {

  const celebData = useSelector(state => state.similarityData);

  /* store에 응답데이터가 들어왔을때만 TwoResultContent 컴포넌트가 렌더링 되도록 설정 */
  const shouldRenderTwoResultContent = Object.keys(celebData).length > 0;

  const goHomeScreenPressHandler = () => {
    console.log('Go To Home Screen Button clicked!');
  }

  return (
    <View>
      <ScreenTitle />
      <Text>유사한 인물과 어떻게 닮았는지 자세히 알려드릴게요!</Text>
      {shouldRenderTwoResultContent && <TwoResultContent />}
      <BackWithTextButton key="goHomeScreen" onPress={ goHomeScreenPressHandler } />
      {shouldRenderTwoResultContent && <CelebResultBanner />}
    </View>
    );
  }
  
  export default CompareCelebResponse;