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
import firebase from '../../../../DB/configDB';
import FlatListUser from '../../../../components/FlatListUser'

const ListUser = ({navigation:{navigate}}) =>{
    
    
    const refreshPage =(data)=>{
        setRefresh(data);
    }
    return(
       <SafeAreaView>
            <FlatListUser
            event={navigate}
        ></FlatListUser>
       
       </SafeAreaView>
    )
}

export default ListUser;