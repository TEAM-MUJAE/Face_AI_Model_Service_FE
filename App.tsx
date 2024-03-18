import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './src/screens/HomeScreen';
import CompareCelebRequestScreen from './src/screens/CompareCelebRequestScreen';
import CompareOtherRequestScreen from './src/screens/CompareOtherRequestScreen';
import CompareCelebResponseScreen from './src/screens/CompareCelebResponseScreen';
import CompareOtherResponseScreen from './src/screens/CompareOtherResponseScreen';
import LoginScreen from './src/screens/LoginScreen';
import AgreeScreen from './src/screens/AgreeScreen';


const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Agree' component={AgreeScreen} />
        {/* <Stack.Screen name='forgotId' component= />
        <Stack.Screen name='forgotPassword' component= />
        <Stack.Screen name='UserSettings' component= /> */}
        <Stack.Screen name='CompareCelebRequest' component={CompareCelebRequestScreen} />
        <Stack.Screen name='CompareCelebResponse' component={CompareCelebResponseScreen} />
        <Stack.Screen name='CompareOtherRequest' component={CompareOtherRequestScreen} />
        <Stack.Screen name='CompareOtherResponse' component={CompareOtherResponseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
