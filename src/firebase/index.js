import * as firebase from 'firebase/app'

import 'firebase/firestore'

import firebaeConfig from './firebaseConfig'

const app = firebase.initializeApp(firebaeConfig)

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app)
}