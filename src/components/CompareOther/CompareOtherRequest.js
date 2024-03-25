import { useEffect } from 'react';
import {StyleSheet, Text, View, Alert } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';


import FirstInsertImage from '../Common/FirstInsertImage';
import SecondInsertImage from '../Common/SecondInsertImage';
import Loading from '../Common/AnalyzeLoading';
import ScreenTitle from '../Common/ScreenTitle';
import ExploreButton from '../../static/Svg/ExploreButton';
import { callGetCompareOtherAPI } from '../../apis/SimilarityAPI';
import { setFirstImageUrl, setIsFirstSelected, setIsLoading, setIsSecondSelected, setIsThirdSelected, setSecondImageUrl, setSelectedFirstImage, setSelectedSecondImage, setSelectedThirdImage, setThirdImageUrl } from '../../features/compareSlice';


function CompareOtherRequest() {
  
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

  /* ==== 이미지가 하나라도 선택되지 않았을 경우 예외처리 === */ 
  const initialFormImage = require('../../static/img/resource/uploadForm.png');

  const selectedFirstImage = useSelector(state => state.compare.selectedFirstImage);
  const isFirstSelected = useSelector(state => state.compare.isFirstSelected); // isFirstSelected가 false이면 ExploreButton 버튼으로 API 요청 불가 (초기값: false)

  const selectedSecondImage = useSelector(state => state.compare.selectedSecondImage);
  const isSecondSelected = useSelector(state => state.compare.isSecondSelected); // isSecondSelected가 false이면 ExploreButton 버튼으로 API 요청 불가 (초기값: false)

  /* ScreenTitle 컴포넌트에 화면 타이틀 전달 */ 
  const title = route.params?.title ?? 'NavContent 컴포넌트에서 title을 받아오지 못했습니다. 무야호~~~~~~~~~~~~~';
  const navigationFrom = route.params?.navigateFrom ?? '';
  console.log('navigationFrom1 : ', navigationFrom);


  useEffect(() => {
    if (selectedFirstImage !== initialFormImage) {
      dispatch(setIsFirstSelected(true));
    }
    if (selectedSecondImage !== initialFormImage) {
      dispatch(setIsSecondSelected(true));
    }
  }, [selectedFirstImage, selectedSecondImage]);

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

  /* 비동기처리하는 동안 Loading 컴포넌트 화면을 띄우기 위한 state */
  const isLoading = useSelector(state => state.compare.isLoading); // isLoading이 true이면 Loading 컴포넌트를 렌더링 (초기값은 false)

  /* 터치 이벤트 핸들러 */
  const exploreToComparePressHandler = async () => {

    if (!isFirstSelected) {
      Alert.alert("알림", `분석할 이미지가 선택되지 않았어요. 상단 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`, [
        { text: '확인' }
      ]);
      return;
    }

    if (!isSecondSelected) {
      Alert.alert("알림", `비교 대상이 될 이미지가 선택되지 않았어요. 하단 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`, [
        { text: '확인' }
      ]);
      return;
    }

    dispatch(setIsLoading(true)); // isLoading을 true로 변경하여 Loading 컴포넌트를 렌더링

    try {
      await dispatch(callGetCompareOtherAPI());
      navigation.navigate('CompareOtherResponse');
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
      <Text style={styles.stepTitle}>Step1. 분석하고 싶은 얼굴 사진을 올려주세요!</Text>
      <FirstInsertImage />
      <Text style={styles.stepTitle}>Step2. 비교 대상 얼굴 사진을 올려주세요!</Text>
      <SecondInsertImage />
      {/* <Text style={styles.stepTitle}>TIP.연예인과 직접 비교하기</Text>
      <CelebBanner /> */}
      <ExploreButton key="exploreToCompare" onPress={ exploreToComparePressHandler } />
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      // backgroundColor: 'burlywood', // A light background color
    },
    stepTitle: {
      fontSize: 15,
      color: '#6F50F8', // Slightly lighter text for the description
      textAlign: 'center', // Center align description
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 10,
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

  export default CompareOtherRequest;