import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from '../theme/IconActive'
const IconActive = (props) =>{
    return(
        <View style={[styles[props.class],{flexDirection: 'row', width:50}]}>
            <Icon name={props.nameIcon} style={[{marginRight:10}, styles.iconStyle]}></Icon>
            <Text style={{color:"white"}}>{props.number}</Text>
        </View>
    )
}

export default IconActive;