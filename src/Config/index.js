import firebase from 'firebase/app';
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyCfQBItwYqAxKuIfLBTRclFHvxE5_8pNoI",
    authDomain: "fir-69256.firebaseapp.com",
    projectId: "fir-69256",
    storageBucket: "fir-69256.appspot.com",
    messagingSenderId: "511366569049",
    appId: "1:511366569049:web:26148607ecd99dd653e548"
  };
  // Initialize Firebase
if(firebase.apps.length  === 0){
  Firebase =  firebase.initializeApp(firebaseConfig);
}
export default Firebase;

