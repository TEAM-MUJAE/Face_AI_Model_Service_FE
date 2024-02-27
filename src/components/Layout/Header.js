import { Text, View } from 'react-native';
import layoutStyles from './styles/layoutStyles';

function Header() {
  return (
    <View style={ layoutStyles.headerContainer }>
      <Text style={ layoutStyles.mainTitle }>알고보니 ○○○?</Text>
      <Text style={ layoutStyles.subTitle }>일반인이었던 내가</Text>
    </View>
  );
}

export default Header;