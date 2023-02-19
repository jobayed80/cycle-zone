import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDco2dh9HL7z7JN8OGpgJ5A_2J5GP383S8",
    authDomain: "cycle-zone-a3dce.firebaseapp.com",
    projectId: "cycle-zone-a3dce",
    storageBucket: "cycle-zone-a3dce.appspot.com",
    messagingSenderId: "741172189799",
    appId: "1:741172189799:web:918d8c4ec6f9d7811d52c2"
  };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase
