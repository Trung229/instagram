import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal:30,
        backgroundColor:'white',
        paddingTop:60,
    },
    containerTitled:{
        width:'100%',
        height:'25%',  
    },
    containerTitledUp:{
        height:'15%', 
    },
    containerInput:{
        width:"100%",
        justifyContent:'flex-start',
        height:'30%',  
    },
    containerInputUp:{
        height:'40%'
    },
    containerButton:{
        flex:1,
    },
    lineBreak:{
        flex:1,
    },
    textSocial:{
        flex:1,
        alignItems: 'center',
    },
    colorSocial:{
        color:'#9d9bcc',
        opacity:1,
    },
    containerIconSocial:{
        justifyContent: 'center',
        width:'100%',
    },
    dataPicker:{
        marginTop:20,
        position: 'absolute',
        right:0,
        left:190,
        top:-15,

    }
})
export default styles;