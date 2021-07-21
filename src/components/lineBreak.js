import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../theme/LineBreak'
const LineBreak =(props)=>{
    return(
        <View style={styles.container}>
            <View style={styles.line1}></View>
            <Text style={styles.textStyling}>{props.value}</Text>
            <View style={styles.line2}></View>
        </View>
    )
}

export default LineBreak;