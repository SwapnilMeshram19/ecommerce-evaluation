import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./actionType"


export const loginLoading=()=>{
    return {
        type:LOGIN_LOADING
    }
}

export const loginError=()=>{
    return {
        type:LOGIN_ERROR
    }
}

export const loginSuccess=()=>{
    return {
        type:LOGIN_SUCCESS
    }
}

export const logoutSuccess=()=>{
    return {
        type:LOGOUT_SUCCESS
    }
}