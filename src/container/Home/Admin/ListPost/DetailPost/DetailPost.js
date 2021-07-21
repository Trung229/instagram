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
  Modal,
  TouchableWithoutFeedback,
  Alert,
  Share
} from 'react-native';
import HeaderView from '../../../../../components/header'
import firebase from '../../../../../DB/configDB'
import styles from '../../../../../theme/headerView';
import stylesDetail from '../../../../../theme/DetailPost';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconActive from '../../../../../components/IconActive';
import stylesModal from '../../../../../theme/FlatlistUserView';
import TextView from '../../../../../components/TextViewBasic'
const DetailPost = ({navigation:{navigate},route:{params:{nameKey, nameAdmin, avatarAdmin}}}) =>{
  console.log("====================",navigate)
  const [modalVisible, setModalVisible] = useState(false);
  const [key, setKey] = useState("");
  const [post, setPost] = useState("");
    useEffect(() =>{
      firebase
      .firestore()
      .collection("Post")
      .doc(nameKey)
      .get()
      .then((item) =>{
          const {title, picture, createdAt} = item.data();
          setPost({title, picture, createdAt})
      })
    },[])
    const deleteItem = () =>{
      Alert.alert(
          "Message from system", 
          "Are you sure you want to delete that item?", 
          [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress:() => {
                  const fetch = firebase
                  .firestore()
                  .collection("Post")
                  .doc(nameKey)
                  .delete()
                  .then(response =>{
                      navigate("ListPost")
                  })
                  return fetch;     
              } 
              }
            ]
      )
      
}
    const goToUpdate =()=>{
      setModalVisible(!modalVisible)
      navigate("Update", {nameKey,nameAdmin, avatarAdmin});
    }
    const onShare =() => {
      //Here is the Share API
      Share.share({
        message: post.title,
      })
        //after successful share return result
        .then((result) => console.log(result))
        //If any thing goes wrong it comes here
        .catch((errorMsg) => console.log(errorMsg));
    };
  
    return(
        <View style={{flex:1}}>
           <View style={{height:"10%", width:"100%"}}>
           <HeaderView  IconLeft="camera" IconRight="cog" style={{height:"100%", width:"100%"}}></HeaderView>
           </View>
         <ScrollView style={{height:"90%", backgroundColor:"#1a1a1c", paddingHorizontal:20, position:"relative"}}>
         
            <View style={stylesDetail.containerHeader}>
              <View style={{flexDirection:"row", alignItems: "center", width:"90%"}}>
                <Image source={{uri:avatarAdmin}} style={{width:40, height:40, borderRadius:40}}></Image>
                <Text style={stylesDetail.textStyling}>{nameAdmin}</Text> 
              </View>
              <View style={{width:"10%", justifyContent:"center", alignItems:"center"}}>
              <TouchableOpacity onPress={()=>{
                        setKey(nameKey)
                       setModalVisible(!modalVisible)
                   }}>
              <Icon name="ellipsis-h" style={stylesDetail.iconStyle}></Icon>
              </TouchableOpacity>
              </View>
            </View>
            <View style={stylesDetail.containerImage}>
              <Image source={{uri:post.picture}} style={stylesDetail.imgStyle}></Image>
            </View>
            <View style={stylesDetail.containerViewDetails}>
              <IconActive number={24} nameIcon="heart" class="heart"></IconActive>
              <IconActive number={23} nameIcon="comment" class="comment"></IconActive>
              <IconActive number={680} nameIcon="eye" class="eyes"></IconActive>
              <IconActive  nameIcon="bookmark" class="bookmark"></IconActive>
            </View>
            <View style={stylesDetail.containerFooter}>
              <Text style={stylesDetail.textContent}>{post.title}</Text>
            </View>
           
         </ScrollView>
         <View style={stylesModal.modalList}>
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
           >
            <TouchableWithoutFeedback onPress={()=>setModalVisible(!modalVisible)}><View style={stylesModal.modal}></View></TouchableWithoutFeedback>
              <View style={stylesModal.modalView}>
              <TextView value="Report"></TextView>
               <TextView value="Copy Link"></TextView>
               <TextView value="Share to..." event={onShare}></TextView>
               <TextView value="Update" event={goToUpdate}></TextView>
               <TextView value="Delete" event={deleteItem}></TextView>
              </View>
           </Modal>
           </View>
       </View>
          
    )
}

export default DetailPost;