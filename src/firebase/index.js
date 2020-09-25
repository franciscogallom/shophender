import * as firebase from 'firebase/app'

import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDMqQ26irVLoqXP5XMyDZLlWs_X9mv2CFk",
    authDomain: "shophender-eb75e.firebaseapp.com",
    databaseURL: "https://shophender-eb75e.firebaseio.com",
    projectId: "shophender-eb75e",
    storageBucket: "shophender-eb75e.appspot.com",
    messagingSenderId: "380857171755",
    appId: "1:380857171755:web:370e61f4cbdb8e9cec0f6e"
})

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}