import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import AdminItem from '../../../components/AdminItem';
import firebase from '../../../DB/configDB';
import styles from '../../../theme/adminScreenView'
import ButtonNormal from '../../../components/ButtonNormal'
const AdminScreen = (props) =>{
    console.log(props)
    const {emailUser, navi:{navigate}} = props;
    console.log("--------",emailUser)
    const [numberUser, setNumberUser] = useState("");
    const [numberPost, setNumberPost] = useState("");
    const [key,setKey] = useState("")
    const [numberAdvertisement, setNumberAdvertisement] = useState("");
    useEffect(()=>{
        firebase
        .firestore()
        .collection('users')
        .onSnapshot(items=>{
            let count = 0;
            items.forEach(item=>{
                const {name,email} = item.data();
                if(email === emailUser){
                    setKey(item.id)
                }
                count++;
            })
            setNumberUser(count);
        })
    },[])
    
    useEffect(()=>{
        firebase
        .firestore()
        .collection('Post')
        .onSnapshot(items=>{
            let count = 0;
            items.forEach(item=>{
                count++;
            })
            setNumberPost(count);
        })
    },[])
    useEffect(()=>{
        firebase
        .firestore()
        .collection('advertisement')
        .onSnapshot(items=>{
            let count = 0;
            items.forEach(item=>{
                count++;
            })
            setNumberAdvertisement(count);
        })
    },[])
    const goToListUsers =()=>{
        navigate("ListUser");
    }
    const gotToListPost = () =>{
        navigate("ListPost", {id:key});
    }
    const signOut =()=>{
        firebase
        .auth()
        .signOut()
        .then(()=>{
            navigate("Welcome",{isLoggedIn:false});
        })
    }
    return (
        <View style={styles.container}>
            <ScrollView style={{ height:"80%"}}>
            <AdminItem linkUrl="https://image.flaticon.com/icons/png/512/1077/1077012.png" color1="#d3b4ff" color2="#9daafe" value="User Account" numberValue={numberUser} events={goToListUsers}></AdminItem>
            <AdminItem linkUrl="https://image.flaticon.com/icons/png/512/3617/3617277.png" color1="#9ccff4" color2="#50dbcc" value="Post" numberValue={numberPost} events={gotToListPost}></AdminItem>
            <AdminItem linkUrl="https://image.flaticon.com/icons/png/512/3487/3487031.png" color1="#f59ab4" color2="#f79690" value="advertisement" numberValue={numberAdvertisement}></AdminItem>
        </ScrollView>
        <View style={{height:"8%"}}>
            <ButtonNormal buttonName="SIGN OUT" style={{position: "absolute", backgroundColor:"orange"}} event={signOut}></ButtonNormal></View>
        </View>
    )
}
export default AdminScreen;