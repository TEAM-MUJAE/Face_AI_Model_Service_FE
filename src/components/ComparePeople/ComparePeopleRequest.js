import { useEffect } from 'react';
import { Text, View, Alert } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';


import FirstInsertImage from '../Common/FirstInsertImage';
import SecondInsertImage from '../Common/SecondInsertImage';
import ThirdInsertImage from '../Common/ThirdInsertImage';
import ScreenTitle from '../Common/ScreenTitle';
import AnalyzeLoading from '../Common/AnalyzeLoading';
import ExploreButton from '../../static/Svg/ExploreButton';
import { callGetComparePeopleAPI } from '../../apis/SimilarityAPI';
import { setIsFirstSelected } from '../../features/firstCompareSlice';
import { setIsSecondSelected } from '../../features/secondCompareSlice';
import { setIsLoading, setIsThirdSelected } from '../../features/thirdCompareSlice';



function ComparePeopleRequest() {
  
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const route = useRoute();

    /* ==== 이미지가 하나라도 선택되지 않았을 경우 예외처리 === */
  const initialFormImage = require('../../static/img/resource/uploadForm.png');
  const isLoading = useSelector(state => state.secondCompare.isLoading); // isLoading이 true이면 Loading 컴포넌트를 렌더링 (초기값은 false)

  const selectedFirstImage = useSelector(state => state.firstCompare.selectedImage);
  const isFirstSelected = useSelector(state => state.firstCompare.isFirstSelected); // isFirstSelected가 false이면 ExploreButton 버튼으로 API 요청 불가 (초기값: false)

  const selectedSecondImage = useSelector(state => state.secondCompare.selectedImage);
  const isSecondSelected = useSelector(state => state.secondCompare.isSecondSelected); // isSecondSelected가 false이면 ExploreButton 버튼으로 API 요청 불가 (초기값: false)

  const selectedThirdImage = useSelector(state => state.thirdCompare.selectedImage);
  const isThirdSelected = useSelector(state => state.thirdCompare.isThirdSelected); // isThirdSelected가 false이면 ExploreButton 버튼으로 API 요청 불가 (초기값: false)

  useEffect(() => {
    if (selectedFirstImage !== initialFormImage) {
      dispatch(setIsFirstSelected(true));
    }
    if (selectedSecondImage !== initialFormImage) {
      dispatch(setIsSecondSelected(true));
    }
    if (selectedThirdImage !== initialFormImage) {
      dispatch(setIsThirdSelected(true));
    }
  }, [selectedFirstImage, selectedSecondImage, selectedThirdImage]);

    /* ScreenTitle 컴포넌트에 화면 타이틀 전달 */
  const title = route.params?.title ?? 'NavContent 컴포넌트에서 title을 받아오지 못했습니다. 무야호~~~~~~~~~~~~~';

    /* 터치 이벤트 핸들러 */
  const exploreToComparePressHandler = async () => {

    if (!isFirstSelected) {
      Alert.alert("알림", `분석할 이미지가 선택되지 않았어요. 첫번째 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`);
      return;
    }

    if (!isSecondSelected) {
      Alert.alert("알림", `비교할 이 사람이 없어요. 두번째 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`);
      return;
    }

    if (!isThirdSelected) {
        Alert.alert("알림", `비교할 요 사람이 없어요. 세번째 '터치하여 업로드' 칸을 터치하여 이미지를 선택해주세요!`);
        return;
    }

    dispatch(setIsLoading(true)); // isLoading을 true로 변경하여 Loading 컴포넌트를 렌더링

    try {
      await dispatch(callGetComparePeopleAPI());
      navigation.navigate('ComparePeopleResponse');
    } catch (error) {
      console.error('API 호출 에러 : ', error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  if (isLoading) {
    return (
      <View>
        <AnalyzeLoading />
      </View>
    );
  }

  return (
    <View>
      <ScreenTitle title={ title } />
      <Text>분석하고 싶은 얼굴 사진을 올려주세요!</Text>
      <FirstInsertImage />
      <Text>이 사람과 더 닮았을까? 궁금한 첫번째 얼굴 사진을 올려주세요!</Text>
      <SecondInsertImage />
        <Text>아니면 요 사람과 더 닮았을까? 궁금한 두번째 얼굴 사진을 올려주세요!</Text>
        <ThirdInsertImage />
      <ExploreButton key="exploreToCompare" onPress={ exploreToComparePressHandler } />
    </View>
    );
  }
  
  export default ComparePeopleRequest;