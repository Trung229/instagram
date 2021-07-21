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
  Button,
  Image,
} from 'react-native';
import firebase from '../../../../../DB/configDB'
import styles from '../../../../../theme/Detail'
import Line from '../../../../../components/Line'
import TextField from '../../../../../components/FieldInputUser';
const Detail = ({route:{params:{id}}}) =>{
    const [user, setUser] = useState("")
    const [date, setDate] = useState("")
    useEffect(() =>{
        firebase
        .firestore()
        .collection("users")
        .doc(id)
        .get()
        .then((item) =>{
            const {name,gender,email,avatar,like,follow,popular, createdAt, pictureProFile, role} = item.data();
            setDate(new Date(createdAt.nanoseconds).toString())
            setUser({name,gender,email,avatar,like,follow,popular, createdAt, pictureProFile, role});
        })
        .catch((error) => console.error(error));

    },[])
    
    return(
       
       <View style={{position:"relative"}}>
            <View style={{height:"40%", backgroundColor:"orange", position:"relative"}}>
                <Image source={{uri:user.pictureProFile}} style={{width:"100%", height:"100%", resizeMode:"cover"}}></Image>
                <View style={styles.modal}></View>
                <View style={styles.containerInfo}>
                <Image source={{uri:user.avatar}} style={styles.avatar}></Image>
                <Text style={styles.textAvatar}>{user.name}</Text>
                <Text style={styles.textDate}>{date}</Text>
                </View>
            </View>
            <View style={{width:"100%", alignItems:"center", position:"absolute",bottom:40,height:"60%"}}>
               <View style={[styles.content1,{marginBottom:30}]}>
                <TextField iconName="user-circle" textValue={user.gender}></TextField>
                <Line></Line>
                <TextField iconName="envelope" textValue={user.email}></TextField>
                </View>
                <View style={styles.content1}>
                <TextField iconName="address-card" textValue={user.role}></TextField>
                <Line></Line>
                <TextField iconName="key" textValue="Password"></TextField>
                <Line></Line>
                <TextField iconName="map-marker" textValue="Address is Updating"></TextField>
                <Line></Line>
                <TextField iconName="globe-africa" textValue="Language is Updating"></TextField>
                </View>
               </View>
            <View style={{height:"60%"}}></View>
       </View>
    )
}

export default Detail;