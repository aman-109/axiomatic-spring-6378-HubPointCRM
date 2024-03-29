import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.types"

export const login = (creds) =>async(dispatch) =>{

    dispatch({type:LOGIN_REQUEST})

    try{
        const response = await axios.post('https://hubpointserver.onrender.com/user/login',creds,{
            withCredentials: true,
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
        }})
        console.log(response)
        dispatch({type:LOGIN_SUCCESS,payload:response.data})
    }
    catch(err){
            dispatch({type:LOGIN_FAILURE,payload:err.message})
    }
}

export const logout = () =>({type:LOGOUT})