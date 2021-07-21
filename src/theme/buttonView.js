import React from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  grediant: {
      height: 45,
      width: 300,
      justifyContent: 'center',
      alignSelf: 'center',
      marginVertical:10,
      borderRadius:3,
      
  },
  buttonContainer: {
    flex: 1.0,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    width: '99%',
    margin:2
  },
  buttonText: {
    textAlign: 'center',
    color: '#292691',  
    alignSelf: 'center',
    fontWeight: 'bold',
    letterSpacing:2,
  },
  isActive:{
    backgroundColor: 'transparent',
    width: '100%',
    color:'white',
  },
  mrBottom: {
    marginBottom:10,
  }
  
})
export default styles;