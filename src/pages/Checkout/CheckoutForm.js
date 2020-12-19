import React from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik'

import checkPay from '../../assets/img/check.svg'

const CheckoutForm = ({ handleBuy, totalToPay }) => {

    const validateFields = values => {
        const errors = {}
        if (!values.name) errors.name = 'Campo requerido.'
        if (!values.surname) errors.surname = 'Campo requerido.'
        if (!values.city) errors.city = 'Campo requerido.'
        if (!values.address) errors.address = 'Campo requerido.'
        if (!values.phone) { 
            errors.phone = 'Campo requerido.'
        } else if (!/^\d{6,20}$/.test(values.phone)){
            errors.phone = 'Numero inválido.';
        }
        return errors
    }

    return (
        <Formik
            initialValues = {{name: '', surname: '', address: '', phone: '', city: ''}}
            onSubmit = {(values) => handleBuy(values)}
            validate = {validateFields}
        >
        {
            (errors) =>
                <Form className = 'checkout-form' > 
                    <Field name = "name" placeholder = 'Nombre.' />
                    <ErrorMessage name = 'name' component = 'p' className = 'p-error' />
                    <Field name = "surname" placeholder = 'Apellido.' />
                    <ErrorMessage name = 'surname' component = 'p' className = 'p-error' />
                    <Field name = "city" placeholder = 'Ciudad.' />
                    <ErrorMessage name = 'city' component = 'p' className = 'p-error' />
                    <Field name = "address" placeholder = 'Direccion.' />
                    <ErrorMessage name = 'address' component = 'p' className = 'p-error' />
                    <Field name = "phone" placeholder = 'Número de celular.' />
                    <ErrorMessage name = 'phone' component = 'p' className = 'p-error' />

                    <button 
                        className = 'confirm-buy-btn'
                        type = 'submit'
                    >
                            CONFIRMAR DATOS DE ENVÍO 
                            <img src = {checkPay} alt = "$"/>
                    </button>
                </Form>
        }
        </Formik>
    )
}

export default CheckoutForm