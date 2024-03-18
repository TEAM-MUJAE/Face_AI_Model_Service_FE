import React, { useEffect } from 'react';
import { Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';


import CompareCelebButton from '../../static/Svg/CompareCelebButton';
import CompareOtherButton from '../../static/Svg/CompareOtherButton';
import ComparePeopleButton from '../../static/Svg/ComparePeopleButton';
import { setChangedTitleText } from '../../features/titleSlice';



function NavContent() {

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {}
  }, []);

  const celebPressHandler = () => {
    const changeTitle = '나와 닮은 연예인이 있을까?';
    dispatch(setChangedTitleText(changeTitle));
    navigation.navigate('CompareCelebRequest');
  }

  const otherbPressHandler = () => {
    const changeTitle = '너와 나는 얼마나 닮았을까?';
    dispatch(setChangedTitleText(changeTitle));
    navigation.navigate('CompareOtherRequest');
  }

  const peoplePressHandler = () => {
    const changeTitle = '둘중에 누구와 더 닮았을까?';
    dispatch(setChangedTitleText(changeTitle));
    navigation.navigate('ComparePeopleRequest');
  }

  return (
    <View>
      <Text>터치하여 계속</Text>
      <CompareCelebButton key="celeb" onPress={ celebPressHandler } />
      <CompareOtherButton key="other" onPress={ otherbPressHandler } />
      <ComparePeopleButton key="people" onPress={ peoplePressHandler } />
    </View>
  );
}

export default NavContent;