import { Text, View } from 'react-native';


import ScreenTitle from '../Common/ScreenTitle';
import FirstInsertImage from '../Common/FirstInsertImage';
import ExploreButton from '../../static/Svg/ExploreButton';
import { callGetCompareCelebAPI } from '../../apis/SimilarityAPI';
import { useDispatch } from 'react-redux';



function CompareCelebRequest() {

  const dispatch = useDispatch();

  const exploreToFindPressHandler = () => {
    console.log('Explore To Find Button clicked!');
    
    // AI 서버에 이미지 전송
    dispatch(callGetCompareCelebAPI());
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