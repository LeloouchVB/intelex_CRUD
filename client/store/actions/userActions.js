import axios from "axios/index";
import {push} from 'react-router-redux';

export function fetchUsers() {
    return function (dispatch) {
        dispatch({type: 'FETCH_USERS_STARTED'});
        return axios.get('/api/user')
            .then(res => {
                dispatch({type: 'FETCH_USERS_FULFILLED', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'FETCH_USERS_ERROR', payload: err})
            });
    }
}

export function addUser(user) {
    return function (dispatch) {
        dispatch({type: 'ADD_USER_STARTED'});
        return axios.post('/api/user', user)
            .then((res) => {
                dispatch({type: 'ADD_USER_FULFILLED', payload: res.data});
                dispatch(push(`/show/${res.data._id}`));
            })
            .catch((err) => {
                dispatch({type: 'ADD_USER_ERROR', payload: err.response.data.errors})
            });
    }
}

export function fetchUser(id) {
    return function (dispatch) {
        dispatch({type: 'FETCH_USER_STARTED'});
        return axios.get(`/api/user/${id}`)
            .then(res => {
                dispatch({type: 'FETCH_USER_FULFILLED', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'FETCH_USER_ERROR', payload: err})
            });
    }
}

export function updateUser(user) {
    return function (dispatch) {
        dispatch({type: 'UPDATE_USER_STARTED'});

        return axios.put(`/api/user/${user._id}`, user)
            .then((res) => {
                dispatch({type: 'UPDATE_USER_FULFILLED', payload: res.data});
                dispatch(push(`/show/${res.data._id}`));
            })
            .catch((err) => {
                dispatch({type: 'UPDATE_USER_ERROR', payload: err.response.data.errors})
            });


    }
}

export function deleteUser(id) {
    return function (dispatch) {
        dispatch({type: 'DELETE_USER_STARTED'});
        return axios.delete(`/api/user/${id}`)
            .then((res) => {
                dispatch({type: 'DELETE_USER_FULFILLED', payload: res.data});
                dispatch(push('/'));
            })
            .catch((err) => {
                dispatch({type: 'DELETE_USER_ERROR', payload: err})
            });
    }
}