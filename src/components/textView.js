import React from 'react';
import {
  Text,
} from 'react-native';
import styles from '../theme/textView'
const TextView =(props)=>{
    return(
        <Text 
        style={[styles.textWelcome,
            styles[props.styling], 
            styles[props.class],
            styles[props.styling2], 
            styles[props.normalFont],
            styles[props.styling3],
            styles[props.styleColor]
        ]}
        >{props.value}</Text>
    )
}

export default TextView;