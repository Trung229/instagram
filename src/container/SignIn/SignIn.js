import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import TextView from '../../components/textView';
import ButtonView from '../../components/ButtonView';
import styles from '../../theme/signIn';
import InputView from '../../components/InputView';
import LineBreak from '../../components/lineBreak';
import firebase from '../../DB/configDB'
const SignIn =(props)=>{
    const {navigation:{navigate}} = props;
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validatePassword,setValidatePassword] = useState([]);
    const [validateEmail,setValidateEmail] = useState([]);

    useEffect(()=>{
        const arrEmail = [];
        const arrPassword = [];
        firebase
        .firestore()
        .collection('users')
        .onSnapshot((result)=>{
           result.forEach(item=>{
               const {email, password} = item.data();
               arrEmail.push(email);
               arrPassword.push(password);
               setValidateEmail(validateEmail.concat(arrEmail));
               setValidatePassword(arrPassword)
           })
        })
    },[])
    const onChangeEmail =(emailField)=>{
        setEmail(emailField)
    }
    const onChangePassword =(passwordField)=>{
        setPassword(passwordField)
    }

    const loginUser = ()=>{
        if(validateEmail.some(item => item === email) && validatePassword.some(item => item === password)){
            firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(()=>{
                navigate('Home', {
                    email: email,
                    password: password,
                    isLoggedIn:true,
                });
        })
        .catch(error=>{console.log(error)})
        }else{
            Alert.alert(
                "Message from App",
                "Email or Password invalid or not exist, please try again",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            )
        }

    }
    return(
        <View style={styles.container}> 
            <View style={styles.containerTitled}>
            <TextView value="Welcome!" class="signInLayout"></TextView>
            <TextView value="Sign in to continue" styling="textDescrip" styling2="textDescripSignIn"></TextView>
            </View>
            <View style={styles.containerInput}>
                <InputView placeholder="Enter your email address"  event={onChangeEmail}></InputView>
                <InputView placeholder="Enter your password "  styling="mrTop" event={onChangePassword} isPassword={true}></InputView>
            </View>
            <View style={styles.containerButton}>
            <ButtonView name="LOGIN" class="isActive" event={loginUser}></ButtonView>
            <TextView value="Forgot Password ?" styling="textDescrip" normalFont="normalFont"></TextView>
            <LineBreak value="or" stylingText="textStyling" styling="textDescrip" normalFont="normalFont"></LineBreak>
            </View>
            <View style={styles.textSocial}>
                <TextView value="Social Media Login" styling="textDescrip" styling2="textDescripSignIn" style={styles.colorSocial}></TextView>
            <View style={[styles.containerIconSocial,{flexDirection:'row'}]}>
                <Image style={{width:30, height:30}} source={{uri:'https://i.pinimg.com/564x/f5/23/b0/f523b0067b0400da679e10260987af86.jpg'}}></Image>
                <Image style={{width:30, height:30, marginHorizontal:30,}} source={{uri:'https://i.pinimg.com/564x/97/e8/97/97e897b3851e415bec4fd30c265eb3ce.jpg'}}></Image>
                <Image style={{width:30, height:30}} source={{uri:'https://i.pinimg.com/564x/70/b9/bf/70b9bfd83ae93ae96c51d57cff1813c5.jpg'}}></Image>
            </View>
            <View style={{ textAlign: 'left', width:'100%', marginTop:20, flexDirection:'row'}}>
                <TextView value="Don't have an account ?" styling="textDescrip" styling2="textDescripSignIn" styling3='smallSize'></TextView>
                <TouchableOpacity onPress={()=>navigate('SignUp')}>
                <TextView value=" Sign Up" styling="textDescrip" styling2="textDescripSignIn" styling3='smallSize' styleColor="styleColor"></TextView>
                </TouchableOpacity>
            </View>
            </View>
           
        </View>
    )
}

export default SignIn;