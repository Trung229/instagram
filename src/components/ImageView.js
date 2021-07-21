import React from 'react';
import {
  Image,
} from 'react-native';
import styles from '../theme/imgView'
const ImageView =(props)=>{
    return(
        <Image source={{uri:props.link}} style={styles.imgWelCome}></Image>
    )
}

export default ImageView;