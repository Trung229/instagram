import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:20,
      backgroundColor:"#1a1a1c",
      alignItems:"center",
      flex:1,
    },
    containerCenter:{
      alignItems:"center",
      marginTop:20,
    },
    IconSize:{
      fontSize:20,
      color:"#7d7c80",
      marginTop:20,
    },
    textTitle:{
      color:"#ffffff",
      fontSize:20,
      fontWeight:"bold",
    },
    textAdmin:{
      color:"#ffffff",
      opacity:.7,
    }
})
export default styles;