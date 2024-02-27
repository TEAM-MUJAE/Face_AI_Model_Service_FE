import { Text, View } from 'react-native';


import ExploreButton from '../Svg/ExploreButton';
import layoutStyles from './styles/layoutStyles';



function NavButton() {

  const onPressHandler = () => {
    console.log('Explore Button clicked!');
  }

  return (
    <View style={ layoutStyles.contentContainer }>
      <Text style={ layoutStyles.contentText }>터치하여 계속</Text>
      <ExploreButton onPress={ onPressHandler } />
    </View>
  );
}

export default NavButton;