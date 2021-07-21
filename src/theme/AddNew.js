import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    containerHeader:{
        marginTop:50,
        paddingHorizontal:5,
        flexDirection:"row",
        alignItems:"center",
    },
    containerImg:{
        marginHorizontal:15,
    },
    textStyling:{
        fontSize:20,
        fontWeight:"500",
        color:"white",
    },
    containerMode:{
        borderWidth:1,
        borderRadius:5,
        alignItems:"center",
        borderColor:"grey",
        opacity:.6,
        marginTop:5,
    },
    textInner:{
        fontWeight:"500",
        borderColor:"grey",
        opacity:.6,
        fontSize:10,
        color:"white",
    },
    containerTextInput:{
        paddingHorizontal:20,
        paddingTop:20,
        justifyContent:"center",
    },
    containerBody:{
       height:"100%"
    },
    buttonPost:{
        backgroundColor:"#fa5456",
        marginLeft:"auto",
        marginRight:15,
        padding:10,
        borderRadius:10,
    }
    
})
export default styles;