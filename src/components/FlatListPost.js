import React from 'react';
import {
    View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import styles from '../theme/FlatlistPost'
const FlatListPosts = (props) =>{
    const {admin:{name, avatar}} = props;
    const Item = (propItem) =>{
        console.log(props.event);
        return(
           <TouchableOpacity onPress={()=>{props.event("DetailPost", {nameKey:propItem.keyUnique, nameAdmin:name, avatarAdmin: avatar})}}>
                <View style={[styles.container]}>
                <View style={[styles.containerImg,{width:"100%",height:"60%"}]}>
                    <Image source={{uri:propItem.pictureURI}} style={{width:"100%", height:"100%",borderTopLeftRadius:20,borderTopRightRadius:20}}></Image>
                </View>
                <View style={{height:"40%"}}>
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle} numberOfLines={2}>{propItem.title}</Text>
                </View>
                <View style={styles.containerFooter}>
                    <View style={styles.containerLeft}>
                        <Text style={styles.nameAdmin}>{props.name}</Text>
                        <Text style={[styles.marginText,{color:"#616067"}]}>10mins ago</Text>
                    </View>
                    <Image source={{uri:props.avatar}} style={{width:40, height:40, borderRadius:40}}></Image>
                </View>
                </View>
            </View>
           </TouchableOpacity>
        )
    }
    const renderItems =({item})=>{
        
        return(
            <Item createdAt={item.createdAt} pictureURI={item.picture} title={item.title} name={item.name} keyUnique={item.key}></Item>
        )
    }
    return(
           <FlatList
            data={props.data}
            renderItem = {renderItems}
            keyExtractor = {item => item.key}
            style={{height:"100%", width:"100%"}}
       ></FlatList>
     
    )
}

export default FlatListPosts;