import React from 'react';
import { StatusBar, useColorScheme, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/screens/HomeScreen';
import CompareCelebScreen from './src/screens/CompareCelebScreen';
import screenStyles from './src/screens/styles/screenStyles';
import CelebBanner from './src/components/Common/CelebBanner';
import CompareTwoPeopleScreen from './src/screens/CompareTwoPeopleScreen';


// const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={ backgroundStyle.backgroundColor }
      />
      {/* <HomeScreen /> */}
      {/* <CompareCelebScreen /> */}
      <CompareTwoPeopleScreen />
    </SafeAreaView>
  );
}

export default App;
