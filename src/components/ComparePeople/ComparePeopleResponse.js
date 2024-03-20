import { Text, View } from 'react-native';


import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import BackWithTextButton from '../../static/Svg/BackWithTextButton';
import PeopleResultContent from './PeopleResultContent';



function ComparePeopleResponse() {

  const celebData = useSelector(state => state.similarityData);
  const navigation = useNavigation();

  /* store에 응답데이터가 들어왔을때만 PeopleResultContent 컴포넌트가 렌더링 되도록 설정 */
  const shouldRenderPeopleResultContent = Object.keys(celebData).length > 0;

  const goHomeScreenPressHandler = () => {
    console.log('Go To Home Screen Button clicked!');
    navigation.navigate('Home');
  }

  return (
    <View>
      <Text>이 사람과 요 사람 중 더 닮았다고 생각하는 사람과 어떻게 닮았는지 알려드릴게요!</Text>
      {shouldRenderPeopleResultContent && <PeopleResultContent />}
      <BackWithTextButton key="goHomeScreen" onPress={ goHomeScreenPressHandler } />
    </View>
    );
  }
  
  export default ComparePeopleResponse;