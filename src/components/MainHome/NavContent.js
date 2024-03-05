import React, { useEffect } from 'react';
import { Text, View } from 'react-native';



import CompareCelebButton from '../../static/Svg/CompareCelebButton';
import CompareTwoButton from '../../static/Svg/CompareTwoButton';
import CompareMultiButton from '../../static/Svg/CompareMultiButton';



function NavContent() {

  // const navigation = useNavigation();

  useEffect(() => {
    return () => {}
  }, []);

  const celebPressHandler = () => {
    console.log('CompareCeleb Button clicked!');
    // navigation.navigate('CompareCeleb');
  }

  const compareTwobPressHandler = () => {
    console.log('CompareTwoPeople Button clicked!');
    // navigation.navigate('CompareTwoPeople');
  }

  const compareMultiPressHandler = () => {
    console.log('CompareMultiPeople Button clicked!');
  }

  return (
    <View>
      <Text>터치하여 계속</Text>
      <CompareCelebButton key="celeb" onPress={ celebPressHandler } />
      <CompareTwoButton key="twoPeople" onPress={ compareTwobPressHandler } />
      <CompareMultiButton key="multiPeople" onPress={ compareMultiPressHandler } />
    </View>
  );
}

export default NavContent;