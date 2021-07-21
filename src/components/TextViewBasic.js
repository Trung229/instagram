import React from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import styles from '../theme/TextViewBasic';
const TextView =(props)=>{
    return(
    
            <Text style={[styles.textView, styles[props.value]]} onPress={props.event}>{props.value}</Text>
    )
}

export default TextView;