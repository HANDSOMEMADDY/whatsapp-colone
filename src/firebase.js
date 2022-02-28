import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyATKXHqZgRp6e3f0rFk6kW01sfM2MaEmfY",
    authDomain: "whatsapp-colone-59274.firebaseapp.com",
    projectId: "whatsapp-colone-59274",
    storageBucket: "whatsapp-colone-59274.appspot.com",
    messagingSenderId: "180367686132",
    appId: "1:180367686132:web:e128bd66cc59dadbae61a1",
    measurementId: "G-6BC6P2MTX6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
 const auth = firebase.auth();
 const provider = new firebase.auth.GoogleAuthProvider();

 export {db,auth,provider};
 export default firebaseApp;
