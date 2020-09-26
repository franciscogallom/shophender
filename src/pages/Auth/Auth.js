import React, { useState, useContext } from 'react'

import 'firebase/auth'

import { useFirebaseApp } from 'reactfire'

import './auth.scss'

import logIn from '../../assets/img/log-in.svg'
import signIn from '../../assets/img/sign-in.svg'

import AuthContext from '../../context/AuthProvider'

const Auth = () => {

    const { email, setEmail} = useContext(AuthContext)

    const [password, setPassword] = useState('')
    const [showForm, setShowForm] = useState(email === '')

    const firebase = useFirebaseApp()
    
    const handleSubmit = (e) => {
        submit()
        setShowForm(false)
        e.preventDefault()
    }

    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    const login = async (e) => {
        e.preventDefault()
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => setShowForm(false))
        .catch(e =>alert(e.message))
    }

    return (
        <section className='auth-container margin-t'>
            {!showForm ? <h1>{email.slice(0, email.indexOf('@'))}, muchas gracias por ser parte de <strong>shophender</strong>.</h1> :
            <form>    
                <p>Inicia sesión o crea una nueva cuenta en dos pasos!</p>
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