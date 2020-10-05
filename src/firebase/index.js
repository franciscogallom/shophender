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

const db = getFirestore()
const itemCollection = db.collection("items")

export function getItemsForHome(sex, setItems, setLoader, setErr){
    setLoader(true)
    // Hago una peticion distinta dependiendo de si hay o no filtro por genero.
    const itemsCollection = sex === '' ? itemCollection.limit(4) : itemCollection.where('sex', '==', sex).where('home', '==', true).limit(4)
    itemsCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
            console.log('querySnapshot.size === 0.')
            setErr(true)
            return
        }
        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    .catch((error) => {
        console.log('Error to find the item. Error: ', error)
        setErr(true)
    })
    .finally(() => {
        setLoader(false)
    })
}

export function getItemsForItemDetail (id, setItem, setItems, setLoader, setErr){
    setLoader(true)
    const item = itemCollection.doc(`${id}`)

    item.get().then((doc) => {
        if(!doc.exists) {
            console.log('The document does not exist.')
            setErr(true)
            return
        }
        setItem({ id: doc.id, ...doc.data() })
    }).catch((error) => {
        console.log('Error to find the item. Error: ', error)
        setErr(true)
    }).finally(() => {
        setLoader(false)
    })

    // Obtengo cuatro productos aleatorios para mostar debajo del que estoy viendo.
    const itemsCollection = itemCollection.orderBy('unitPrice').startAt(Math.floor(Math.random() * 16000)).limit(4)
    itemsCollection.get().then((querySnapshot) => {
        setLoader(true)
        if(querySnapshot.size === 0) {
            console.log('querySnapshot.size === 0.')
            setErr(true)
            return
        }
        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    .catch((error) => {
        console.log('Error to find the item. Error: ', error)
        setErr(true)
    })
    .finally(() => {
        setLoader(false)
    })
}