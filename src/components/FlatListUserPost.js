import React, {useState} from 'react';
import {
    View,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from 'react-native';
import styles from '../theme/FlatListUserPost'


const FlatListUserPost =(props)=>{
    const [seeMore, setSeeMore] = useState(true)
    const Item =(data)=>{
        return(
            <View style={{marginVertical:10}}>
                <View style={styles.containerInfoPost}>
                    <Image source={{uri:data.adminAvatar}} style={{width:40, height:40, borderRadius:40}}></Image>
                    <View style={styles.detailInfoPost}>
                        <Text style={styles.nameText}>{data.adminName}</Text>
                        <Text style={styles.timeText}>9mins ago</Text>
                    </View>
                </View>
                <View style={{alignItems: "center", marginTop:10,}}>
                <Image source={{uri:data.contentImg}} style={{width:"90%", height:350, borderRadius:20}}></Image>
                </View>
                <View style={{padding:20}}>
                    <Text numberOfLines={seeMore === true ? 2 : 0} style={{textAlign:"justify", color:"white"}}>{data.contentTitle} </Text>
                    <TouchableOpacity onPress={()=>{setSeeMore(!seeMore)}}>
                    <Text style={styles.timeText}>see more</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const renderItems =({item})=>{
        return <Item adminName={item.userPost} adminAvatar={item.userAvatar} contentTitle={item.title} contentImg={item.picture}></Item>
        
    }
    return( 
            <FlatList
            data={props.data}
            renderItem = {renderItems}
            keyExtractor = {item => item.key}
            style={{width:"100%",height:"100%"}}
            ></FlatList>
            
        
    )
}

export default FlatListUserPost;