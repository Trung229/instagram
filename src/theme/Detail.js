import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    containerInfo:{
        position: 'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset:{
            width:0,
            height:5,
        },
        overflow: 'visible',
        shadowOpacity:.5,
    },
    avatar:{
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    textAvatar:{
        color: 'white',
        fontWeight:'700',
        fontSize:30,
        marginVertical:10,
    },
    textDate:{
        maxWidth:200,
        textAlign: 'center',
        color: 'white',
        opacity:.6,
        lineHeight:30,
    },
    modal:{
        height:"100%",
        width:"100%",
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, .3)', 
    },
    content1:{
        padding:20,
        backgroundColor:"white",
        borderRadius:20,
        width:"95%",
        shadowColor:"black",
        shadowOffset:{
            width:0,
            height:1,
        },
        overflow:"visible",
        shadowOpacity:.3,
    },
    
})
export default styles;