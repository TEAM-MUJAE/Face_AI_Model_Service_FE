import { ActivityIndicator, Alert, Text, View } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import ScreenTitle from '../Common/ScreenTitle';
import FirstInsertImage from '../Common/FirstInsertImage';
import ExploreButton from '../../static/Svg/ExploreButton';
import { callGetCompareCelebAPI } from '../../apis/SimilarityAPI';
import { setIsFirstSelected, setIsLoading } from '../../features/firstCompareSlice';
import { useEffect } from 'react';


function CompareCelebRequest() {

  const initialFormImage = require('../../static/img/resource/uploadForm.png');
  const isLoading = useSelector(state => state.firstCompare.isLoading);

  const selectedFirstImage = useSelector(state => state.firstCompare.selectedImage);
  const isFirstSelected = useSelector(state => state.firstCompare.isFirstSelected);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (selectedFirstImage !== initialFormImage) {
      dispatch(setIsFirstSelected(true));
    }
  }, [selectedFirstImage]);

  const exploreToFindPressHandler = async () => {

    if (!isFirstSelected) {
      Alert.alert("알림", `분석할 이미지가 선택되지 않았어요. 상단 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`);
      return;
    }

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
        <Text>열심히 닮은 연예인을 찾고 있습니다... 잠시만 기다려 주세요!</Text>
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