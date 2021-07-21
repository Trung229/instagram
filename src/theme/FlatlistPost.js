import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        width:"100%",
        backgroundColor:"#3a393f",
        borderRadius:20,
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:.6,   
        
        height:400,
        marginTop:20,
    },
    containerFooter:{
        flexDirection:"row",
        paddingHorizontal:20,
        justifyContent:"space-between",
        alignItems:"center",
        paddingTop:10,
    },
    containerTitle:{
        padding:20,
    },
    textTitle:{
        color:"#d2d1d6",
        fontWeight:"bold",
        fontSize:15,
    },
    containerLeft:{
    },
    marginText:{
        marginTop:10,
    },
    nameAdmin:{
        color:"#ffffff",
        fontWeight:"600",
    }

      })
export default styles;