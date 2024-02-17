/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import StoriesPage from './Pages/StoriesPage';
import axios from 'axios';
import { API } from './Pages/API';
import { Provider } from 'react-redux';
import store from './REDUX/Store';
import UploadPost from './Components/UploadPost';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userDetailsActions } from './REDUX/MiddlewareActions/MidllewareActions';
import { useDispatch, useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

function App() {
  const [userLogindetails, setUserLogindetails] = useState([null]); 
  const dispatch = useDispatch();
  const state = useSelector((state) => (state.userreducer));
  
  

  console.log(state?.user?.userdetails,'ppppp');

  // Check if userLogindetails has the token and render the appropriate screen
 

  return (
    
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName={"HOME"}>
          <Stack.Screen name="LOGIN" component={Login} />
          <Stack.Screen name="SIGNUP" component={Signup} />
          <Stack.Screen name="HOME" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="PROFILE" component={Profile} options={{ headerShown: false }} />
          <Stack.Screen name="STORIES" component={StoriesPage} options={{ headerShown: false }} />
          <Stack.Screen name="UPLOADPOST" component={UploadPost} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}




export default App;
