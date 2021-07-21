import * as firebase from "firebase";

const config ={
    apiKey: "AIzaSyBj88wdPGaJt9Oc-8BRxMrme8tUnzVFZGY",
    authDomain: "useraccount-8e828.firebaseapp.com",
    projectId: "useraccount-8e828",
    storageBucket: "useraccount-8e828.appspot.com",
    messagingSenderId: "236851130378",
    appId: "1:236851130378:web:c2967ebb101e8033dcaff3"
}

firebase.initializeApp(config);
firebase.firestore().settings({experimentalForceLongPolling: true});

export default firebase;