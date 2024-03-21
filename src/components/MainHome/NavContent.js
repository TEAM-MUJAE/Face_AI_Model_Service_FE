import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import CompareCelebButton from '../../static/Svg/CompareCelebButton';
import CompareOtherButton from '../../static/Svg/CompareOtherButton';
import ComparePeopleButton from '../../static/Svg/ComparePeopleButton';
import BannerImage from '../../static/img/mainBanner/banner.jpg';
import Carousel from 'react-native-snap-carousel';

function NavContent() {
  const navigation = useNavigation();
  
  // Get screen width
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  console.log('screenWidth:', screenWidth);
  console.log('screenHeight:', screenHeight);

  const dynamicStyles = StyleSheet.create({
    slide: {
      backgroundColor: '#f5f5f5', // Or any other visible color
      borderRadius: 8,
      width: screenWidth - 60,
      height: screenHeight -500,
      paddingBottom: 20, // Depending on your content
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
  });

  // Carousel items
  const carouselItems = [
    {
      title: '나와 닮은 연예인이 있을까?',
      component: CompareCelebButton,
      onPress: () =>
        navigation.navigate('CompareCelebRequest', {
          title: '나와 닮은 연예인이 있을까?',
        }),
    },
    {
      title: '너와 나는 얼마나 닮았을까?',
      component: CompareOtherButton,
      onPress: () =>
        navigation.navigate('CompareOtherRequest', {
          title: '너와 나는 얼마나 닮았을까?',
        }),
    },
    {
      title: '둘중에 누구와 더 닮았을까?',
      component: ComparePeopleButton,
      onPress: () =>
        navigation.navigate('ComparePeopleRequest', {
          title: '둘중에 누구와 더 닮았을까?',
        }),
    },
  ];



  const renderItem = ({ item }) => (
    <View style={dynamicStyles.slide}>
      <item.component onPress={item.onPress} />
    </View>
  );


  return (
    <View style={styles.container}>
      <View style={styles.frontCard}>
        <Image source={BannerImage} style={styles.banner} resizeMode="cover" />
      </View>
      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 60}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideScale={0.94}
        inactiveSlideOpacity={0.7}
        enableMomentum={true}
        activeSlideAlignment={'center'}
        // loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  banner: {
    height: 200,
    marginBottom: 20,
  },
  slideText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
 
  // Adjust the carousel container if needed
  carouselContainer: {
    marginTop: 20,
  },
});

export default NavContent;
