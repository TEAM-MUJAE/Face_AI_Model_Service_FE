import { Text, View } from 'react-native';


import ScreenTitle from '../Common/ScreenTitle';
import FirstInsertImage from '../Common/FirstInsertImage';
import ExploreButton from '../../static/Svg/ExploreButton';



function CompareCelebRequest() {

  const exploreToFindPressHandler = () => {
    console.log('Explore To Find Button clicked!');
  }

  return (
    <View>
      <ScreenTitle />
      <Text>분석하고 싶은 얼굴 사진을 올려주세요!</Text>
      <FirstInsertImage />
      <ExploreButton key="exploreToFind" onPress={ exploreToFindPressHandler } />
    </View>
  );
}

export default CompareCelebRequest;