import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyA3UA5HyRWuVoBYyAitKFlxglgJwf6WzPs",
    authDomain: "my-fifth-project-ad557.firebaseapp.com",
    projectId: "my-fifth-project-ad557",
    storageBucket: "my-fifth-project-ad557.appspot.com",
    messagingSenderId: "700574841187",
    appId: "1:700574841187:web:ff2c98a814fe2e278b7b56",
    measurementId: "G-398N3SS5WD"
});

let db = firebase.firestore()
let storage = firebase.storage()

export {
    firebase, db, storage
}