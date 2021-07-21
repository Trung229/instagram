import React from 'react';
import {
  Pressable,
  Text,
   View
} from 'react-native';
import styles from '../theme/buttonView'
import LinearGradient from 'react-native-linear-gradient';
const ButtonView =(props)=>{
    return(
        <View>
            <LinearGradient
         colors={['#02009b', '#3900ee']}
         start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
         style={[styles.grediant]}
        >  
         <Pressable style={[styles.buttonContainer, styles[props.class]]} onPress={props.event}>
            <Text style={[styles.buttonText, styles[props.class]]}>{props.name}</Text>
        </Pressable>
     </LinearGradient>
        </View>
    )
}

export default ButtonView;