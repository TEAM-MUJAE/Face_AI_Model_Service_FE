import { View } from 'react-native';


import homeScreenStyles from './styles/homeScreenStyles';
import Header from '../components/Layout/Header';
import NavButton from '../components/Layout/NavButton';

function HomeScreen() {
  return (
    <View style={ homeScreenStyles.container }>
      <Header />
      <NavButton />
    </View>
  );
}

export default HomeScreen;