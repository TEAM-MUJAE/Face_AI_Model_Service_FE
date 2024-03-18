import { ActivityIndicator, Text, View, Alert } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import ScreenTitle from '../Common/ScreenTitle';
import FirstInsertImage from '../Common/FirstInsertImage';
import SecondInsertImage from '../Common/SecondInsertImage';
import CelebBanner from '../Common/CelebBanner';
import ExploreButton from '../../static/Svg/ExploreButton';
import { callGetCompareOtherAPI } from '../../apis/SimilarityAPI';
import { setIsLoading, setIsSecondSelected } from '../../features/secondCompareSlice';
import { setIsFirstSelected, setSelectedImage } from '../../features/firstCompareSlice';
import { useEffect } from 'react';
import BxTrash from '../../static/Svg/BxTrash';





function CompareOtherRequest() {

  const initialFormImage = require('../../static/img/resource/uploadForm.png');
  const isLoading = useSelector(state => state.secondCompare.isLoading);

  const selectedFirstImage = useSelector(state => state.firstCompare.selectedImage);
  const isFirstSelected = useSelector(state => state.firstCompare.isFirstSelected);
  console.log("isFirstSelected", isFirstSelected)

  const selectedSecondImage = useSelector(state => state.secondCompare.selectedImage);
  const isSecondSelected = useSelector(state => state.secondCompare.isSecondSelected);
  console.log("isSecondSelected", isSecondSelected)
  
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    if (selectedFirstImage !== initialFormImage) {
      dispatch(setIsFirstSelected(true));
    }
    if (selectedSecondImage !== initialFormImage) {
      dispatch(setIsSecondSelected(true));
    }
  }, [selectedFirstImage, selectedSecondImage]);

  const exploreToComparePressHandler = async () => {

    if (!isFirstSelected) {
      Alert.alert("알림", `분석할 이미지가 선택되지 않았어요. 상단 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`);
      return;
    }

    if (!isSecondSelected) {
      Alert.alert("알림", `비교 대상이 될 이미지가 선택되지 않았어요. 하단 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`);
      return;
    }

    dispatch(setIsLoading(true));
    console.log('Explore To Compare Button clicked!');

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
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>서로 얼마나 닮았는지 열심히 비교하고 있습니다..! 잠시만 기다려 주세요!</Text>
      </View>
    );
  }

  return (
    <View>
      <ScreenTitle />
      <Text>분석하고 싶은 얼굴 사진을 올려주세요!</Text>
      <FirstInsertImage />
      <Text>비교 대상 얼굴 사진을 올려주세요!</Text>
      <SecondInsertImage />
      <Text>TIP. 혹시 직접 비교하고 싶은 연예인이 이중에 있나요? 골라보세요!</Text>
      <CelebBanner />
      <ExploreButton key="exploreToCompare" onPress={ exploreToComparePressHandler } />
    </View>
    );
  }
  
  export default CompareOtherRequest;