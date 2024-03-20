import React, { useEffect } from 'react';
import { Alert, Text, View } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';


import ScreenTitle from '../Common/ScreenTitle';
import FirstInsertImage from '../Common/FirstInsertImage';
import Loading from '../Common/Loading';
import ExploreButton from '../../static/Svg/ExploreButton';
import { callGetCompareCelebAPI } from '../../apis/SimilarityAPI';
import { setIsFirstSelected, setIsLoading } from '../../features/firstCompareSlice';


function CompareCelebRequest() {

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  

  const initialFormImage = require('../../static/img/resource/uploadForm.png');
  const isLoading = useSelector(state => state.firstCompare.isLoading); // isLoading이 true이면 Loading 컴포넌트를 렌더링 (초기값은 false)

  const selectedFirstImage = useSelector(state => state.firstCompare.selectedImage);
  const isFirstSelected = useSelector(state => state.firstCompare.isFirstSelected); // isFirstSelected가 false이면 ExploreButton 버튼으로 API 요청 불가 (초기값: false)

  const title = route.params?.title ?? 'NavContent 컴포넌트에서 title을 받아오지 못했습니다. 무야호~~~~~~~~~~~~~';

  useEffect(() => {
    if (selectedFirstImage !== initialFormImage) {
      dispatch(setIsFirstSelected(true));
    }
  }, [selectedFirstImage]);

  const exploreToFindPressHandler = async () => {
    
    console.log('Explore To Find Button clicked!');

    if (!isFirstSelected) {
      Alert.alert("알림", `분석할 이미지가 선택되지 않았어요. 상단 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`);
      return;
    }

    dispatch(setIsLoading(true)); // isLoading을 true로 변경하여 Loading 컴포넌트를 렌더링

    try {
      await dispatch(callGetCompareCelebAPI());
      navigation.navigate('CompareCelebResponse', {
        title: '닮은 연예인 찾기 결과'
      });
    } catch (error) {
      console.error('API 호출 에러 : ', error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  if (isLoading) {
    return (
      <View>
        <Loading />
      </View>
    );
  }

  return (
    <View>
      <ScreenTitle title={ title } />
      <Text>분석하고 싶은 얼굴 사진을 올려주세요!</Text>
      <FirstInsertImage />
      <ExploreButton key="exploreToFind" onPress={ exploreToFindPressHandler } />
    </View>
  );
}

export default CompareCelebRequest;