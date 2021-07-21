import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button,
  FlatList
} from 'react-native';
import firebase from '../../../../DB/configDB';
import HeaderView from '../../../../components/header'
import FlatListPost from '../../../../components/FlatListPost'

const ListPost = ({navigation:{navigate}, route:{params:{id}}}) =>{
    const [post, setPost] = useState([]);
    const [admin, setAdmin] = useState("");
    useEffect(() =>{
        firebase
        .firestore()
        .collection("Post")
        .onSnapshot(result =>{
            let myArr = [];
            result.forEach(item =>{
                const {picture, title,createdAt,id} = item.data();
                myArr.push({ title, picture, createdAt, id, key:item.id})
            })
            setPost(myArr)
        })
    },[])
    useEffect(() =>{
        firebase
        .firestore()
        .collection("users")
        .doc(id)
        .get()
        .then(result =>{
            const {email, name, avatar, createdAt} = result.data();
            setAdmin({email,name,avatar, createdAt, key: result.id})
        })
    },[])
    const AddNew =()=>{
        navigate("AddNew",{userId:id});
    }
    return(
       <View style={{flex:1}}>
            <View style={{height:"10%"}}>
            <HeaderView adminName={admin.name} IconLeft="camera" IconRight="cog" style={{height:"100%",}} clickItem={AddNew}></HeaderView>
            </View>
            <View style={{backgroundColor:"#19191b", alignItems:"center",flex:1}}>
              <FlatListPost
              data={post}
              avatar={admin.avatar}
              name={admin.name}
              event={navigate}
              admin={admin}
              ></FlatListPost>
            </View>
       </View>
          
    )
}

export default ListPost;