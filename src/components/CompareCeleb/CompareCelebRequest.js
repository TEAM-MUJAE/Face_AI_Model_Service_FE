import { ActivityIndicator, Text, View } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import ScreenTitle from '../Common/ScreenTitle';
import FirstInsertImage from '../Common/FirstInsertImage';
import ExploreButton from '../../static/Svg/ExploreButton';
import { callGetCompareCelebAPI } from '../../apis/SimilarityAPI';
import { setIsLoading } from '../../features/firstCompareSlice';


function CompareCelebRequest() {

  const isLoading = useSelector(state => state.firstCompare.isLoading);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const exploreToFindPressHandler = async () => {
    dispatch(setIsLoading(true));
    console.log('Explore To Find Button clicked!');

    try {
      await dispatch(callGetCompareCelebAPI());
      navigation.navigate('CompareCelebResponse');
    } catch (error) {
      console.error('API 호출 에러 : ', error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>분석 중입니다...</Text>
      </View>
    );
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