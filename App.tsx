import React from 'react';
import { View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/screens/HomeScreen';
import CompareCelebRequestScreen from './src/screens/CompareCelebRequestScreen';
import CompareTwoRequestScreen from './src/screens/CompareTwoRequestScreen';
import CompareCelebResponseScreen from './src/screens/CompareCelebResponseScreen';



// const Stack = createStackNavigator();

function App(): React.JSX.Element {

  // const Stack = createStackNavigator();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name='Home' component={HomeScreen} />
    //     <Stack.Screen name='CompareCeleb' component={CompareCelebRequestScreen} />
    //     <Stack.Screen name='CompareTwo' component={CompareTwoRequestScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View>
      {/* <HomeScreen /> */}
      {/* <CompareCelebRequestScreen /> */}
      <CompareCelebResponseScreen />
      {/* <CompareTwoRequestScreen /> */}
    </View>
  );
}

export default App;
