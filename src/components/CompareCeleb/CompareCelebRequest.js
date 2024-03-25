import React, { useEffect } from 'react';
import {StyleSheet , Alert, Text, View } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';


import ScreenTitle from '../Common/ScreenTitle';
import FirstInsertImage from '../Common/FirstInsertImage';
import Loading from '../Common/AnalyzeLoading';
import ExploreButton from '../../static/Svg/ExploreButton';
import { callGetCompareCelebAPI } from '../../apis/SimilarityAPI';
import { setFirstImageUrl, setIsFirstSelected, setIsLoading, setIsSecondSelected, setIsThirdSelected, setSecondImageUrl, setSelectedFirstImage, setSelectedSecondImage, setSelectedThirdImage, setThirdImageUrl } from '../../features/compareSlice';


function CompareCelebRequest() {

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  

  const initialFormImage = require('../../static/img/resource/uploadForm.png');
  const isLoading = useSelector(state => state.compare.isLoading); // isLoading이 true이면 Loading 컴포넌트를 렌더링 (초기값은 false)

  const selectedFirstImage = useSelector(state => state.compare.selectedFirstImage);
  const isFirstSelected = useSelector(state => state.compare.isFirstSelected); // isFirstSelected가 false이면 ExploreButton 버튼으로 API 요청 불가 (초기값: false)

  const title = route.params?.title ?? 'NavContent 컴포넌트에서 title을 받아오지 못했습니다. 무야호~~~~~~~~~~~~~';
  console.log('title1', title);
  const navigationFrom = route.params?.navigateFrom ?? '';
  console.log('navigationFrom1 : ', navigationFrom);

  useEffect(() => {
    if (selectedFirstImage !== initialFormImage) {
      dispatch(setIsFirstSelected(true));
    }
  }, [selectedFirstImage]);

  useEffect(() => {
    const focusListener = navigation.addListener('focus', () => {
        console.log('네비게이션 적용 및 물리적 뒤로가기 터치 실행 후 이미지 업로드 화면으로 돌아왔을 경우 입력 칸 전체 초기화');
        dispatch(setSelectedFirstImage(initialFormImage));
        dispatch(setIsFirstSelected(false));
        dispatch(setSelectedSecondImage(initialFormImage));
        dispatch(setIsSecondSelected(false));
        dispatch(setSelectedThirdImage(initialFormImage));
        dispatch(setIsThirdSelected(false));
        dispatch(setFirstImageUrl(''));
        dispatch(setSecondImageUrl(''));
        dispatch(setThirdImageUrl(''));
        dispatch(setIsLoading(false));
    });

    return focusListener;
  }, [navigation, navigationFrom]);

  const exploreToFindPressHandler = async () => {
    
    console.log('Explore To Find Button clicked!');

    if (!isFirstSelected) {
      Alert.alert("알림", `분석할 이미지가 선택되지 않았어요. 상단 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`, [
        { text: '확인' }
      ]);
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
      <ScreenTitle title={title} />
      <FirstInsertImage />
      <Text style={styles.descriptionText} >분석하고 싶은 얼굴 사진을 올려주세요!</Text>
      <ExploreButton key="exploreToFind" onPress={ exploreToFindPressHandler } />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF', // A light background color
  },
  descriptionText: {
    fontSize: 15,
    color: 'red', // Slightly lighter text for the description
    textAlign: 'center', // Center align description
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF', // A blue color for the button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25, // Rounded corners
    shadowColor: '#000', // Shadow for depth
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // White text on the button
    textAlign: 'center',
  },
});

export default CompareCelebRequest;