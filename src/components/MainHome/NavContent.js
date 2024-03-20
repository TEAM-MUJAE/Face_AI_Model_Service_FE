import React from 'react';
import { Text, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';


import CompareCelebButton from '../../static/Svg/CompareCelebButton';
import CompareOtherButton from '../../static/Svg/CompareOtherButton';
import ComparePeopleButton from '../../static/Svg/ComparePeopleButton';



function NavContent() {

  const navigation = useNavigation();

  const celebPressHandler = () => {
    navigation.navigate('CompareCelebRequest', {
      title: '나와 닮은 연예인이 있을까?'
    });
  }

  const otherbPressHandler = () => {
    navigation.navigate('CompareOtherRequest', {
      title: '너와 나는 얼마나 닮았을까?'
    });
  }

  const peoplePressHandler = () => {
    navigation.navigate('ComparePeopleRequest', {
      title: '둘중에 누구와 더 닮았을까?'
    });
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