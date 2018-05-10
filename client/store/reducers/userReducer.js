const initialState = require('../initialState');

export default function reducer(state = initialState.default, action) {
    switch (action.type) {

        /*INDEX*/
        case 'FETCH_USERS_STARTED': {
            return {...state, fetching: true}
        }
        case 'FETCH_USERS_FULFILLED': {
            return {...state, users: action.payload, fetching: false, fetched: true}
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, errors: action.payload, fetching: false, fetched: false}
        }

        /*STORE*/
        case 'ADD_USER_STARTED': {
            return {...state, adding: true}
        }
        case 'ADD_USER_FULFILLED': {
            return {...state, user: action.payload, added: true, adding: false}
        }
        case 'ADD_USER_ERROR': {
            return {...state, errors: action.payload, added: false, adding: false}
        }

        /*SHOW*/
        case 'FETCH_USER_STARTED': {
            return {...state, fetching: true}
        }

        case 'FETCH_USER_FULFILLED': {
            return {...state, user: action.payload, fetching: false, fetched: true}
        }

        case 'FETCH_USER_ERROR': {
            return {...state, errors: action.payload, fetching: false, fetched: false}
        }

        /*UPDATE*/
        case 'UPDATE_USER_STARTED': {
            return {...state, updating: true}
        }
        case 'UPDATE_USER_FULFILLED': {
            return {...state, user: action.payload, updating: false, updated: true}
        }
        case 'UPDATE_USER_ERROR': {
            return {...state, errors: action.payload, updating: false, updated: false}
        }

        /*DESTROY*/
        case 'DELETE_USER_STARTED': {
            return {...state, deleting: true}
        }
        case 'DELETE_USER_FULFILLED': {
            return {...state, user: action.payload, deleting: false, deleted: true}
        }
        case 'DELETE_USER_ERROR': {
            return {...state, errors: action.payload, deleting: false, deleted: false}
        }

        default: {
            return {...state}
        }
    }
}