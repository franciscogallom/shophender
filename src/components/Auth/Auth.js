import React, { useState, useContext } from 'react'

import 'firebase/auth'

import { useFirebaseApp } from 'reactfire'

import './auth.scss'

import logIn from '../../assets/img/log-in.svg'
import signIn from '../../assets/img/sign-in.svg'

import Loader from '../Loader/Loader'
import Alert from '../Alert/Alert'

import AuthContext from '../../context/AuthProvider'

const Auth = (props) => {

    const { email, setEmail} = useContext(AuthContext)

    const [password, setPassword] = useState('')

    // Muestro o no el formulario dependiendo de si ya ingrese.
    const [showForm, setShowForm] = useState(email === '')

    const [errorAlert, setErrorAlert] = useState('')

    const [loader, setLoader] = useState(false)

    const firebase = useFirebaseApp()
    
    const handleSubmit = (e) => {
        submit()
        e.preventDefault()
    }

    // Creacion de nueva cuenta.
    const submit = async () => {
        setLoader(true)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            setShowForm(false)
            // Cuando estoy en Checkout, maneja si puedo seguir con la compra.
            props.handleFlow !== undefined && props.handleFlow()})
        .catch((e) => setErrorAlert(e.message))
        .finally(() => setLoader(false))
    }

    // Inicio de sesión.
    const login = async (e) => {
        setLoader(true)
        e.preventDefault()
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setShowForm(false)
                // Cuando estoy en Checkout, maneja si puedo seguir con la compra.
                props.handleFlow !== undefined && props.handleFlow()})
            .catch(e => setErrorAlert(e.message))
            .finally(() => setLoader(false))
    }

    return (
        errorAlert !== '' ? <Alert text = {errorAlert} handleAlert = {() => setErrorAlert('')} /> :
        loader ? <Loader /> :
        <section className = {`auth-container ${props.onCheckout}`}>
            {!showForm ? <h1>{email.slice(0, email.indexOf('@'))}, muchas gracias por ser parte de <strong>shophender</strong>.</h1> :
            <form>    
                <p>inicia sesión o crea una nueva cuenta para poder comprar en nuestra tienda.</p>
                <input placeholder = 'Email.' type = "email" onChange = { e => setEmail(e.target.value)} />
                <input placeholder = 'Contraseña.' type = "password" onChange = { e => setPassword(e.target.value)} />
                <button className = 'sign-in' onClick = {handleSubmit}>Crear cuenta <img src = {signIn} alt = "sign-in"/></button>
                <button className = 'log-in' onClick = {login}>Iniciar sesion <img src = {logIn} alt = "log-in"/></button>
            </form>
            }
        </section>
    )
}

export default Auth