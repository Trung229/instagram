import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    containerHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyling:{
        marginLeft:15,
        color:"white",
        fontSize:15,
        fontWeight:"500",
    },
    iconStyle:{
        color:"white",
        fontSize:15,
    },
    containerImage:{
        marginTop:20,
        maxHeight:400,
    },
    imgStyle:{
        width:"100%", 
        height:"100%",
        borderRadius:20,
        
    },
    containerViewDetails:{
        flexDirection:"row",
        position:"relative",
        width:"100%",
        alignItems:"center",
        marginTop:20,
    },
    containerFooter:{
        marginTop:20,
    },
    textContent:{
        textAlign:"justify",
        color:"white",
        letterSpacing:1.5,
        fontSize:15,
    }
    
})
export default styles;