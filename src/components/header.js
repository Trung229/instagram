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
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../theme/headerView'
const HeaderView = (props) =>{
    return(
       <View style={styles.container}>
           <TouchableOpacity onPress={props.clickItem}><Icon name={props.IconLeft} style={styles.IconSize}></Icon></TouchableOpacity>
           <View style={styles.containerCenter}>
           <Text style={styles.textTitle}>Feeds</Text>
           <Text style={styles.textAdmin}>Welcome back {props.adminName}</Text>
           </View>
           <Icon name={props.IconRight} style={styles.IconSize}></Icon>
       </View>
    )
}

export default HeaderView;