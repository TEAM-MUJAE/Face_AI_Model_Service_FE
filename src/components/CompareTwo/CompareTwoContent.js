import { Text, View } from 'react-native';


import ScreenTitle from '../Common/ScreenTitle';
import FirstInsertImage from '../Common/FirstInsertImage';
import SecondInsertImage from '../Common/SecondInsertImage';
import CelebBanner from '../Common/CelebBanner';
import ExploreButton from '../../static/Svg/ExploreButton';



function CompareTwoContent() {


  const exploreToComparePressHandler = () => {
    console.log('Explore To Compare Button clicked!');
  }

  return (
    <View>
      <ScreenTitle />
      <Text>분석하고 싶은 얼굴 사진을 올려주세요!</Text>
      <FirstInsertImage />
      <Text>비교 대상 얼굴 사진을 올려주세요!</Text>
      <SecondInsertImage />
      <ExploreButton key="exploreToCompare" onPress={ exploreToComparePressHandler } />
      <CelebBanner />
      {/* <ExploreButton key="exploreToCompare" onPress={ exploreToComparePressHandler } /> */}
    </View>
    );
  }
  
  export default CompareTwoContent;