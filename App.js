/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelComeScreen from './src/container/WelCome/WelCome';
import SignInScreen from './src/container/SignIn/SignIn'
import SignUpScreen from './src/container/SignUp/SignUp'
import HomeScreen from './src/container/Home/Home'
import AdminScreen from './src/container/Home/Admin/AdminScreen';
import UserScreen from './src/container/Home/User/User'
import ListUserScreen from './src/container/Home/Admin/ListUser/ListUser'
import DetailScreen from './src/container/Home/Admin/ListUser/DetailUser/Detail'
import ListPostScreen from './src/container/Home/Admin/ListPost/ListPost'
import DetailPostScreen from './src/container/Home/Admin/ListPost/DetailPost/DetailPost'
import AddNewScreen from './src/container/Addnew/Addnew'
import UpdateScreen from './src/container/Update/Update'
const Stack = createStackNavigator();

const App= () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" >
          <Stack.Screen name="Welcome" component={WelComeScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, gestureEnabled: false}}></Stack.Screen>
          <Stack.Screen name="Admin" component={AdminScreen} options={{headerShown: false, gestureEnabled: false}} ></Stack.Screen>
          <Stack.Screen name="User" component={UserScreen} options={{headerShown: false, gestureEnabled: false}}></Stack.Screen>
          <Stack.Screen name="ListUser" component={ListUserScreen} options={{headerShown: false,}}></Stack.Screen>
          <Stack.Screen name="DetailScreen" component={DetailScreen} options={{headerShown: false,}}></Stack.Screen>
          <Stack.Screen name="ListPost" component={ListPostScreen} options={{headerShown:false,}}></Stack.Screen>
          <Stack.Screen name="DetailPost" component={DetailPostScreen} options={{headerShown:false,}}></Stack.Screen>
          <Stack.Screen name="AddNew" component={AddNewScreen} options={{headerShown:false,}}></Stack.Screen>
          <Stack.Screen name="Update" component={UpdateScreen} options={{headerShown:false,}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
};



export default App;
