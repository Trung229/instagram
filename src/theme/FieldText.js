import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding:20,
    },
    containerLeft: {
        flexDirection: 'row', 
        alignItems: 'center',
        flex:1,
    },
    containerRight: {
        
    },
    Icon:{
        fontSize:20,
        opacity:.8,
        color:"#c1c1c5"
    },
    textNormal:{
        fontSize:15,
        fontWeight:"500",
    },
    "mrR-20":{
        marginRight:20,
        
    }
    
})
export default styles;