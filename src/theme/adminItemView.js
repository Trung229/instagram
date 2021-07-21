import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        marginBottom:30,
        height:"70%",
        borderRadius:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowColor:"red",
    }
    ,imgView:{
        width:50,
        height:50,

    },
    adminText:{
        fontSize:20,
        color:"#f3f7fe",
        fontWeight:"500",
        minWidth: 200,
        textAlign:'right',
    },
    containerImg:{
        backgroundColor:"orange",
        alignItems:"center",
        justifyContent:"center"
    }
})
export default styles;