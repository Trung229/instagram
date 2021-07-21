import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    textWelcome:{
        fontSize:40,
        fontWeight: 'bold',
        fontFamily: 'ChalkboardSE-Light',
        letterSpacing: 6,
    },
    textDescrip:{
        fontSize:15,
        fontWeight: 'bold',
        fontFamily: 'Courier',
        letterSpacing:0,
        textAlign:'center',
        lineHeight:30,
        opacity:0.5,
        marginVertical:10,
    },
    signInLayout:{
        fontSize:40,
        fontWeight: 'bold',
        fontFamily: 'Apple SD Gothic Neo',
        letterSpacing: 6,
        color:'#02004e',
    },
    textDescripSignIn:{
        fontSize:15,
        fontWeight: 'bold',
        fontFamily: 'Courier',
        marginVertical:10,
        textAlign:'left',
        color:"#9a99cb",
    },
    normalFont:{
        fontFamily:'Trebuchet MS',
        color:'#414c82',
        opacity:1,
    },
    smallSize:{
        fontSize:12,
    },
    styleColor:{
        color:'#1c42ff',
        opacity:1,
    }
})
export default styles;