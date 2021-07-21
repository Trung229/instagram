import React from 'react';
import {
  TextInput,
} from 'react-native';
import styles from '../theme/inputText'
const TextInputView =(props)=>{
    return(
        <TextInput 
        placeholder={props.placeholder}
        value={props.value} 
        style={[styles.inputField, styles[props.styling]]}
        onChangeText={props.event}
        onFocus={props.eventFocus}
        secureTextEntry={props.isPassword}
        />
    )
}

export default TextInputView;