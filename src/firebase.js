import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCkJVpjTidZ8_j9rvb-beVO6dPqP07nMn0",
    authDomain: "linkedin-clone-e8544.firebaseapp.com",
    projectId: "linkedin-clone-e8544",
    storageBucket: "linkedin-clone-e8544.appspot.com",
    messagingSenderId: "126652161383",
    appId: "1:126652161383:web:221fa927d0db4da7e023c2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }