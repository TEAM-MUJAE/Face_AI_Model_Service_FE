import React from 'react';
import { ScrollView, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/screens/HomeScreen';
import CompareCelebRequestScreen from './src/screens/CompareCelebRequestScreen';
import CompareTwoRequestScreen from './src/screens/CompareTwoRequestScreen';
import CompareCelebResponseScreen from './src/screens/CompareCelebResponseScreen';


const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='CompareCelebRequest' component={CompareCelebRequestScreen} />
        <Stack.Screen name='CompareCelebResponse' component={CompareCelebResponseScreen} />
        <Stack.Screen name='CompareTwoPeople' component={CompareTwoRequestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <ScrollView>
    //   <HomeScreen />
    //   <CompareCelebRequestScreen />
    //   <CompareCelebResponseScreen />
    //   <CompareTwoRequestScreen />
    // </ScrollView>
  );
}

export default App;
