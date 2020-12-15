import * as firebase from 'firebase/app'

import 'firebase/firestore'

import firebaseConfig from './firebaseConfig'

const app = firebase.initializeApp(firebaseConfig)

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
    itemsCollection.get()
        .then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.error('querySnapshot.size === 0.')
                setErr(true)
                return
            }
            setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
            console.error('Error to find the item. Error: ', error)
            setErr(true)
        })
        .finally(() => {
            setLoader(false)
        })
}

// Realizo dos consultas, una para el producto que estoy viendo, y otra para obtener cuatro productos aleatorios.
export function getItemsForItemDetail (id, setItem, setItems, setLoader, setErr){
    setLoader(true)
    const item = itemCollection.doc(`${id}`)
    item.get()
        .then((doc) => {
            if(!doc.exists) {
                console.error('The document does not exist.')
                setErr(true)
                return
            }
            setItem({ id: doc.id, ...doc.data() })
        }).catch((error) => {
            console.error('Error to find the item. Error: ', error)
            setErr(true)
        }).finally(() => {
            setLoader(false)
        })

    // Estos cuatro productos son para mostar debajo del que estoy viendo.
    const itemsCollection = itemCollection.orderBy('unitPrice').startAt(Math.floor(Math.random() * 16000)).limit(4)
    itemsCollection.get()
    .then((querySnapshot) => {
        setLoader(true)
        if(querySnapshot.size === 0) {
            console.error('querySnapshot.size === 0.')
            setErr(true)
            return
        }
        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
    .catch((error) => {
        console.error('Error to find the item. Error: ', error)
        setErr(true)
    })
    .finally(() => {
        setLoader(false)
    })
}

export function getProducts (sex, category, limit, setLoader, setSizeOfCollection, setErr, setItems) { 
    setLoader(true)
    let filter

    if ( sex !== 'all' && category !== 'all') filter = itemCollection.where('sex', '==', sex).where('category', '==', category).limit(limit)
    else if ( category !== 'all' ) filter = itemCollection.where('category', '==', category).limit(limit)
    else if ( sex !== 'all' ) filter = itemCollection.where('sex', '==', sex).limit(limit)
    else filter = itemCollection.limit(limit)

    filter.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
            console.error('querySnapshot.size === 0.')
            setErr(true)
            return
        }
        setSizeOfCollection(querySnapshot.size)
        setItems(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    }).catch((error) => {
        console.error('Error to find the item. Error: ', error)
        setErr(true)
    }).finally(() => {
        setLoader(false)
    })
}

// Manejo una nueva orden
export function addBuy (setLoader, productsInCart, setBuyCompleted, setProductsInCart, state, setOrderID, email, setProductsInLocalStorage) {
    setLoader(true)

    const totalToPay = productsInCart.reduce((accumulator, currentValue) => accumulator + currentValue.pricePerQuantity, 0)

    const items = productsInCart.map(item => {
        return({
            title: item.nameProduct,
            id: item.id,
            totalPrice: item.pricePerQuantity,
            quantity: item.quantity
        })
    })

    const orders = db.collection('orders')
    const newOrder = {
        buyer: {
                name: state.name, 
                surname: state.surname, 
                phone: state.phone, 
                email: email, 
                address: state.address,
                city: state.city
            },
        items: items,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalToPay
    }
    
    orders.add(newOrder).then(({ id }) => {
        setOrderID(id)
    }).catch(err => {
        console.error('Error: ' + err)
    }).finally(() => {
        setLoader(false)
        setBuyCompleted(true)
        // Vacio el carrito.
        setProductsInCart([])
        setProductsInLocalStorage([])
    })
}