import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    welcomeLayout:{
        flex: 1,
        backgroundColor:"white",
        alignItems: "center",
    },
    containerImg:{
        flex: 2,     
        justifyContent: "flex-end",
    },
    containerText:{
        flex: 1.5,
        alignItems: "center",
        width:"95%",
        justifyContent: "center",
    },
    containerButton:{
        flex: 1.3,
        width:"100%",
        alignItems: "center",
      }
    
})
export default styles;