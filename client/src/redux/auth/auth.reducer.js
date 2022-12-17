import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./auth.types"


let token = localStorage.getItem("token")

const initState = {
    isAuth: !!token,
    token:token,
    isLoading:false,
    isError:false,
    errorMessage:"Something went wrong"
}

export const authReducer = (state = initState,{type,payload}) =>{
    switch(type){
        case LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case LOGIN_SUCCESS:{
            localStorage.setItem("token",payload)
            return {
                ...state,
                isLoading:false,
                isError:false,
                token:payload
            }
        }
        case LOGIN_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true,
                errorMessage:payload
            }
        }
         case LOGOUT:{
                localStorage.removeItem("token")
                return {
                    ...state,
                 isAuth:false
                }
            }
            default:{
                return state
            }
    }
}