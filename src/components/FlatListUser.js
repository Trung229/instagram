import React,{useState, useEffect} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../theme/FlatlistUserView';
import Icon from 'react-native-vector-icons/FontAwesome5'
import TextView from './TextViewBasic';
import firebase from '../DB/configDB'
const AdminItem = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [key, setKey] = useState("");
    const [user, setUser] = useState([])
    const [refresh, setRefresh] = useState("");
    useEffect(()=>{
        console.log("Hello!");
        firebase
        .firestore()
        .collection('users')
        .onSnapshot(items=>{
            let myArr = [];
            items.forEach(item=>{
                const {name, email, date, gender,avatar,like,follow,popular} = item.data();
                myArr.push({name, email, date, gender,avatar,like,follow,popular, key: item.id});
            })
            console.log(myArr);
            setUser(myArr);
        })
       
    },[]);
    console.log("check delete",user.length);
    const SayHi = (propKey) =>{
        {props.event("DetailScreen", {id:propKey})}
        
    }
    const Item = (props) =>{
        return (
          <TouchableOpacity onPress={()=>{
              SayHi(props.id)
          }}>
              <View style={styles.containerItem}>
            <LinearGradient
             colors={['#80bdf2','#7da4f3', '#80b7f2']}
             start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
             style={{height:"100%", borderRadius:20,}}
             
            >  
             <View style={styles.containerLeft}>
               <View style={styles.containerInfo}>
                   <Image source={{uri:props.avatar}} style={styles.img}></Image>
                   <View style={styles.containerInfoText}>
                    <Text style={[ styles.textColor,{marginBottom:10}]}>{props.name}</Text>
                    <Text style={styles.textColor}>{props.email}</Text>
                   </View>
                   <TouchableOpacity style={styles.iconView} onPress={()=>{
                       setKey(props.id)
                       setModalVisible(!modalVisible)
                   }}>
                   <Icon name="ellipsis-h" style={styles.iconView}></Icon>
                   </TouchableOpacity>
               </View>
               <View style={styles.containerActive}>
                   <View style={styles.containerPopular}>
                       <Text style={styles.textColoList}>{props.popular}</Text>
                       <Text style={styles.textColoList}>popular</Text>
                   </View>
                   <View style={styles.containerLike}>
                       <Text style={styles.textColoList}>{props.likes}</Text>
                       <Text style={styles.textColoList}>Like</Text>
                   </View>
                   <View style={styles.containerFollow}>
                       <Text style={styles.textColoList}>{props.follow}</Text>
                       <Text style={styles.textColoList}>Follow</Text>
                   </View>
               </View>
           </View>
           <View style={styles.containerRight}></View>
         </LinearGradient>
          </View>
          </TouchableOpacity>
        )
    }
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
                        .collection("users")
                        .doc(key)
                        .delete()
                        .then(response =>{
                            setRefresh("a")
                        })
                        return fetch;     
                    } 
                    }
                  ]
            )
            
    }
    const renderItems = ({item}) =>{
        
        return (
             <Item name={item.name} email={item.email} gender={item.gender} createdAt={item.createdAt} avatar={item.avatar} popular={item.popular} likes={item.like} follow={item.follow} id={item.key}></Item>
             
        )
    }
    return (
       <View style={{position:"relative", borderRadius:20}}>
           <FlatList
           data={user}
           renderItem={renderItems}
           keyExtractor={item => item.key.toString()}
           style={styles.container}
           ></FlatList>
           <View style={styles.modalList}>
           <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
           >
            <TouchableWithoutFeedback onPress={()=>setModalVisible(!modalVisible)}><View style={styles.modal}></View></TouchableWithoutFeedback>
              <View style={styles.modalView}>
              <TextView value="Report"></TextView>
               <TextView value="Copy Link"></TextView>
               <TextView value="Share to..."></TextView>
               <TextView value="Update"></TextView>
               <TextView value="Delete" event={deleteItem}></TextView>
              </View>
           </Modal>
           </View>
       </View>
    )
}
export default AdminItem;