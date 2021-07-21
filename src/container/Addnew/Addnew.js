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
  TextInput,
} from 'react-native';
import firebase from '../../DB/configDB';
import styles from '../../theme/AddNew';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
const Home =({navigation:{navigate},route:{params:{userId}}}) =>{
    const [admin, setAdmin] = useState("");
    const [img, setImg] = useState(null);
    const [title, setTitle] = useState("");
    useEffect(() => {
       firebase
       .firestore()
       .collection("users")
       .doc(userId)
       .get()
       .then((response) =>{
        const {avatar, name} = response.data();
        setAdmin({avatar, name});
       })
    }, [])    
    const onTakePhoto = () => {
        console.log("hi")
        var options = {
            maxHeight: 250,
            maxWidth: 350,
            saveToPhotos: true
        };
    
        launchImageLibrary(options, res => {
          console.log('Response = ', res);
    
          if (res.didCancel) {
            console.log('User cancelled image picker');
          } else if (res.error) {
            console.log('ImagePicker Error: ', res.error);
          } else if (res.customButton) {
            console.log('User tapped custom button: ', res.customButton);
            alert(res.customButton);
          } else {
            let source = res.assets[0] ;
            setImg(source)
            
          }
        });
      };
      const uploadImageAsync = async () => {
        const { uri, fileName } = img
        const ref = firebase
          .storage()
          .ref()
          .child(fileName);
    
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            resolve(xhr.response);
          };
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.responseType = "blob";
          xhr.open("GET", uri, true);
          xhr.send(null);
        });
    
        var mimeString = uri.split(":")[1]
    
        const snapshot = await ref.put(blob, { contentType: mimeString });
    
        let url = await snapshot.ref.getDownloadURL();
        console.log('>>>>', url)
        return url;
      }
      const AddNew =async ()=>{
          const picture = await uploadImageAsync();
          firebase
          .firestore()
          .collection("Post")
          .add({title, picture, userPost:admin.name, userAvatar:admin.avatar})
          .then((response)=>{
              navigate("ListPost");
          })
          .catch((error)=>{console.log(error)});
        }
    return(
        <View style={{backgroundColor:"#19191b", flex:1, position:"relative"}}>
            <ScrollView style={{backgroundColor:"#19191b", flex:1}}>
            <View style={[styles.containerHeader]}>
                <View style={styles.containerImg}>
                    <Image source={{uri:admin.avatar}} style={{width:50, height:50,borderRadius:50}}></Image>
                </View>
                <View style={styles.containerAction}>
                    <Text style={styles.textStyling}>{admin.name}</Text>
                    <View style={styles.containerMode}>
                    <Text style={styles.textInner}>Public</Text>
                    </View>
                </View>  
                <TouchableOpacity style={styles.buttonPost} onPress={AddNew}>
                <Text style={[styles.textStyling,{fontSize:15}]}>POST</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.containerTextInput, {paddingBottom:20}]}>
            <TextInput placeholder="What do you think?" style={{color:"white", }} multiline={true}  placeholderTextColor = "#bbc0c49c" onChangeText={(e)=>setTitle(e)}></TextInput>
            </View>
            <View style={[styles.containerBody, {minHeight:500, marginTop:20}]}>
                <Image source={{uri:img?.uri}} style={{width:"100%",resizeMode:"cover", height:"100%"}}></Image>
            </View>
        </ScrollView>
        <TouchableOpacity onPress={onTakePhoto} style={{position:"absolute", bottom:20, width:"100%", flexDirection:"row"}}>
                <Text style={{marginLeft:"auto",marginRight:10,color:"#fa5456", fontWeight:"500"}}>Select Image</Text>
                <Icon name="file-image" style={{color:"#fa5456", marginRight:"auto"}}></Icon>
            </TouchableOpacity>
        </View>
    )
}

export default Home;