import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:'center',
        overflow:'hidden',
        
    }
    ,line1:{
        width:"45%",
        borderBottomWidth:1,
        borderBottomColor:'#bbbbbb',
    }
    ,line2:{
        width:"50%",
        borderBottomWidth:1,
        borderBottomColor:'#bbbbbb',
    },
    textStyling:{
        marginHorizontal:10,
        fontSize:15,
        fontWeight: 'bold',
        marginVertical:10,
        fontFamily:'Trebuchet MS',
        color:'#272390',
        opacity:1,
    }
})
export default styles;