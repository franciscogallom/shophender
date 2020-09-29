import React, { useState, useContext } from 'react'

import 'firebase/auth'

import { useFirebaseApp } from 'reactfire'

import './auth.scss'

import logIn from '../../assets/img/log-in.svg'
import signIn from '../../assets/img/sign-in.svg'

import Loader from '../../components/Loader/Loader'

import AuthContext from '../../context/AuthProvider'

const Auth = (props) => {

    const { email, setEmail} = useContext(AuthContext)

    const [password, setPassword] = useState('')
    const [showForm, setShowForm] = useState(email === '')

    const [loader, setLoader] = useState(false)

    const firebase = useFirebaseApp()
    
    const handleSubmit = (e) => {
        submit()
        e.preventDefault()
    }

    const submit = async () => {
        setLoader(true)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            setShowForm(false)
            props.handleFlow !== undefined && props.handleFlow()})
        .catch((e) => alert(e.message))
        .finally(() => setLoader(false))
    }

    const login = async (e) => {
        setLoader(true)
        e.preventDefault()
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setShowForm(false)
                props.handleFlow !== undefined && props.handleFlow()})
            .catch(e =>alert(e.message))
            .finally(() => setLoader(false))
    }

    return (
        loader ? <Loader/> :
        <section className={`auth-container margin-t ${props.changeBackground}`}>
            {!showForm ? <h1>{email.slice(0, email.indexOf('@'))}, muchas gracias por ser parte de <strong>shophender</strong>.</h1> :
            <form>    
                <p>Inicia sesión o crea una nueva cuenta para poder comprar en nuestra tienda.</p>
                <input placeholder='Email.' type="email" id='email' onChange = { e => setEmail(e.target.value)} />
                <input placeholder='Contraseña.' type="password" id='password' onChange = { e => setPassword(e.target.value)} />
                <button className='sign-in' onClick = {handleSubmit}>Crear cuenta <img src={signIn} alt="sign-in"/></button>
                <button className='log-in' onClick = {login}>Iniciar sesion <img src={logIn} alt="log-in"/></button>
            </form>
            }
        </section>
    )
}

export default Auth