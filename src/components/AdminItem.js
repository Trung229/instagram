import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Button,
    Image,
} from 'react-native';
import styles from '../theme/adminItemView'
import LinearGradient from 'react-native-linear-gradient';

const AdminItem = (props) => {
    return (
       <TouchableOpacity onPress={props.events}>
            <LinearGradient
            colors={[props.color1, props.color2]}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            style={[styles.grediant, styles.container]}
        >
            <Image source={{ uri: props.linkUrl }} style={styles.imgView}></Image>
            <View>
            <Text style={styles.adminText}>{props.value}</Text>
            <Text style={styles.adminText}>{props.numberValue}</Text>
            </View>
        </LinearGradient>
       </TouchableOpacity>

    )
}
export default AdminItem;