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
  Image,
  Button
} from 'react-native';
import TextView from '../../components/textView';
import ButtonView from '../../components/ButtonView';
import styles from '../../theme/signIn';
import InputView from '../../components/InputView';
import LineBreak from '../../components/lineBreak';
import firebase from '../../DB/configDB'
import DateTimePicker from '@react-native-community/datetimepicker';
const SignUp =(props)=>{
    const {navigation:{navigate}} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);
    const [id, setId] = useState(0);
    const onChangeEmail =(emailField)=>{
        setEmail(emailField)
    }
    const onChangePassword =(passwordField)=>{
        setPassword(passwordField)
    }
    const changeName = (nameField)=>{
        setName(nameField)
    }
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    useEffect(()=>{
        firebase
        .firestore()
        .collection('users')
        .onSnapshot(items=>{
            let count = 0;
            items.forEach(item=>{
                const {email} = item.data();
                count++;
            })
            setId(count);
        })
    },[])
    const signUpAccount =()=>{
        firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((e) => {
            navigate('Home', {
                name: name,
                email: email,
                password: password,
                isLoggedIn:true,
            })
        })
        .catch(error => setError(error.message))
        pushUserToDB();
    }

    const pushUserToDB = () =>{
        firebase
        .firestore()
        .collection('users')
        .add(
            {
                name,email,password,id: id + 1,createdAt:date,like:0,follow:0,popular:0,role:"member"
            }
        )
        .catch(error=>console.log(error));
    }

  

  
    return(
        <View style={styles.container}> 
        <View style={[styles.containerTitled, styles.containerTitledUp]}>
        <TextView value="Hi!" class="signInLayout"></TextView>
        <TextView value="Create a new account" styling="textDescrip" styling2="textDescripSignIn"></TextView>
        </View>
        <View style={[styles.containerInput, styles.containerInputUp]}>
            <InputView placeholder="Enter your name "  event={changeName} ></InputView>
            <InputView placeholder="Enter your email address" styling="mrTop"  event={onChangeEmail}></InputView>
            <InputView placeholder="Enter your password "  styling="mrTop" event={onChangePassword} isPassword={true}></InputView>
            
            
            {show && (
                <View style={{flexDirection:'row', alignItems: 'baseline', justifyContent: 'space-between', position: 'relative', marginTop:20}}>
                <TextView value="Select your birth date: " styling="textDescrip" normalFont="normalFont"></TextView>    
                <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
                style={{width: 320, backgroundColor: "white"}}
                />
                </View>
            )}
            
    
        </View>
       
        <View style={styles.containerButton}>
        <ButtonView name="SIGN UP" class="isActive" event={signUpAccount}></ButtonView>
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
            <TextView value="Already have an account?" styling="textDescrip" styling2="textDescripSignIn" styling3='smallSize'></TextView>
            <TouchableOpacity onPress={()=>{navigate('SignIn')}}>
            <TextView value=" Sign In" styling="textDescrip" styling2="textDescripSignIn" styling3='smallSize' styleColor="styleColor"></TextView>
            </TouchableOpacity>
        </View>
        </View>
       
    </View>
    )
}

export default SignUp;