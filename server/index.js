require('dotenv').config()

const express = require('express')
const Stripe = require('stripe')
const cors = require('cors')

const app = express()

const stripe = new Stripe (process.env.REACT_APP_STRIPE)

app.use(cors({ origin: 'http://localhost:3000' }))

app.use(express.json())

app.post('/api/checkout', async (req, res) => {
    
    try {
        const { id, amount } = req.body

        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Descripcion del producto',
            payment_method: id,
            confirm: true
        }) 
    
        console.log(payment)
    
        res.send('Succesfull payment.')
    
    } catch (error) {

        console.log(error)
        
        res.json({message: error.raw.message})
    }

})

app.listen(3001, () => {
    console.log('Server on port', 3001)
})