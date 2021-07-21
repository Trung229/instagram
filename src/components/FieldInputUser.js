import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../theme/FieldText'
import Icon from 'react-native-vector-icons/FontAwesome5'
const InputTextView = (props) =>{
    return(
        <View style={styles.container}>
            <View style={styles.containerLeft}>
            <View style={{alignItems: 'center', width:"20%"}}><Icon style={[styles.Icon, styles["mrR-20"]]} name={props.iconName}></Icon></View>
            <Text style={styles.textNormal}>{props.textValue}</Text>
            </View>
            <View style={styles.containerRight}>
            <Icon style={styles.Icon} name="chevron-right"></Icon>
            </View>
        </View>
    )
}

export default InputTextView;