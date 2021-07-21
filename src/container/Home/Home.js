import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import AdminScreen from './Admin/AdminScreen';
import UserScreen from './User/User';
import firebase from '../../DB/configDB'
const Home =({navigation,route}) =>{
    const {params:{email,isLoggedIn}} = route;
    if(email === "TrungPham@gmail.com" ){
        return <AdminScreen emailUser={email} navi={navigation} isLogged={isLoggedIn}></AdminScreen>
    }else{
        return <UserScreen emailUser={email} navi={navigation} isLogged={isLoggedIn}></UserScreen>
    }
   
}

export default Home;