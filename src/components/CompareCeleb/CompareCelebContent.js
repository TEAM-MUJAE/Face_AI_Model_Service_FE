import { Text, View } from 'react-native';


import InsertImage from '../Common/InsertImage';
import ScreenTitle from '../Common/ScreenTitle';
import CelebBanner from './CelebBanner';


function CompareCelebContent() {


  return (
    <View>
      <ScreenTitle />
      <Text>분석하고 싶은 얼굴 사진을 올려주세요!</Text>
      <InsertImage />
      <CelebBanner />
    </View>
  );
}

export default CompareCelebContent;