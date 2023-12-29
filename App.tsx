/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';




import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import StoriesPage from './Pages/StoriesPage';
const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
 

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="SIGNUP" >
      <Stack.Screen name="LOGIN" component={Login} />
      <Stack.Screen name="SIGNUP" component={Signup} />
      <Stack.Screen name="HOME" component={Home} options={{headerShown:false}}/>
      <Stack.Screen name="PROFILE" component={Profile} options={{headerShown:false}}/>
      <Stack.Screen name="STORIES" component={StoriesPage} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}



export default App;
