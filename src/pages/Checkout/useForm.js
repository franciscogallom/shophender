import { useReducer } from 'react'

const ACTIONS = {
    UPDATE_NAME: 'update_name',
    UPDATE_SURNAME: 'update_surname',
    UPDATE_ADDRESS: 'update_address',
    UPDATE_PHONE: 'update_phone',
    UPDATE_CITY: 'update_city'
}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_NAME:
            return {
                ...state,
                name: action.payload
            }
        case ACTIONS.UPDATE_SURNAME:
            return {
                ...state,
                surname: action.payload
            }
        case ACTIONS.UPDATE_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case ACTIONS.UPDATE_PHONE:
            return {
                ...state,
                phone: action.payload
            }
        case ACTIONS.UPDATE_CITY:
            return {
                ...state,
                city: action.payload
            }
        default:
            return state;
    }
}

export function useForm(){
    const [state, dispatch] = useReducer(reducer, {
        data: {
            name: '',
            surname: '',
            adress: '',
            phone: '',
            city: '',
        },
        updates: {
            name: name => dispatch({type: ACTIONS.UPDATE_NAME, payload: name}),
            surname: surname => dispatch({type: ACTIONS.UPDATE_SURNAME, payload: surname}),
            address: address => dispatch({type: ACTIONS.UPDATE_ADDRESS, payload: address}),
            phone: phone => dispatch({type: ACTIONS.UPDATE_PHONE, payload: phone}),
            city: city => dispatch({type: ACTIONS.UPDATE_CITY, payload: city}),
        }
    })

    return state
}