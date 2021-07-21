import React from 'react';
import {
  Pressable,
  Text
} from 'react-native';
import styles from '../theme/ButtonNormal'
const Line = (props) =>{
    return(
        <Pressable style={styles.buttonSignOut} onPress={props.event}>
            <Text style={styles.textStyle}>{props.buttonName}</Text>
        </Pressable>
    )
}

export default Line;