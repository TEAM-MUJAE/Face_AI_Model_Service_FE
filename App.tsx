import * as React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './src/screens/HomeScreen';
import CompareCelebScreen from './src/screens/CompareCelebScreen';
import screenStyles from './src/screens/styles/screenStyles';



// const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={ screenStyles.container }>
      {/* <HomeScreen /> */}
      <CompareCelebScreen />
    </View>
  );
}

export default App;
