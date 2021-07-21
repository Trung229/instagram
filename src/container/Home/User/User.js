import React,{useState, useEffect} from  'react';
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
  FlatList
} from 'react-native';
import firebase from '../../../DB/configDB';
import HeaderView from '../../../../src/components/header';
import FlatListUserPost from '../../../components/FlatListUserPost';

const UserScreen = (props) =>{
    const {emailUser, navi:{navigate}} = props;
    const [isLoggedInHome, setIsLoggedInHome] = useState(props.isLogged);
    const [post, setPost] = useState([]);
    console.log(isLoggedInHome)
    const signOut =()=>{
        firebase
        .auth()
        .signOut()
        .then(()=>{
            setIsLoggedInHome(!isLoggedInHome)
            navigate("Welcome",{isLoggedInHome:isLoggedInHome})
        })
    }
    useEffect(() =>{
        firebase
        .firestore()
        .collection("Post")
        .onSnapshot(result =>{
            let myArr = [];
            result.forEach(item =>{
                const {picture, title,createdAt,id,userAvatar,userPost} = item.data();
                myArr.push({ title, picture, createdAt, id, key:item.id,userAvatar,userPost})
            })
            setPost(myArr)
        })
    },[])
    return (
        <View style={{flex: 1}}>
            <View style={{height:"10%"}}>
            <HeaderView adminName={emailUser} IconLeft="sign-out-alt" IconRight="cog" style={{height:"100%"}} clickItem={signOut}></HeaderView>
            </View>
             <View style={{height:"90%",backgroundColor:"#1a1a1c",}}>
             <FlatListUserPost
             data={post}
             ></FlatListUserPost>
            
             </View>
        </View>
    )
}

export default UserScreen;