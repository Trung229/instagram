import React,{useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';
import ImageView from '../../components/ImageView';
import TextView from '../../components/textView';
import styles from '../../theme/welcomeTheme';
import ButtonView from '../../components/ButtonView';
import firebase from '../../DB/configDB'
const Welcome =(props)=>{
    const {navigation:{navigate},isLoggedInHome} = props;
    const [email, setEmail] = useState("")
    const [isAuthen, setIsAuthen] = useState(isLoggedInHome || false);
    console.log("================================",isLoggedInHome || false);
    useEffect(()=>{
        const subs = firebase.auth().onAuthStateChanged(user=>{   
            if(user){
                setIsAuthen(isAuthen);//
                setEmail(user.email);
            }
        })
        return subs
    },[])
    const goToSignIn = e =>{
        navigate('SignIn');
    }
    const goToSignUp = e =>{
        navigate('SignUp');
    }

   if(isAuthen == true){
       navigate('Home',{email})
   }else{
       console.log("user not signed in");
   }
    return(
       <View style={styles.welcomeLayout}>
            <View style={styles.containerImg}>
            <ImageView link="https://i.pinimg.com/564x/40/00/c3/4000c33a3888e4b2754c65a4256da540.jpg"></ImageView>
            </View>
            <View style={styles.containerText}>
                <TextView value="Hello!"></TextView>
                <TextView value="Best place to write life stories and share you journey" styling="textDescrip"></TextView>
            </View>
            <View style={styles.containerButton}>
                <ButtonView name="LOGIN" class="isActive" event={goToSignIn}></ButtonView>
                <ButtonView name="SIGNUP"event={goToSignUp} ></ButtonView>
            </View>
       </View>
    )
}

export default Welcome;