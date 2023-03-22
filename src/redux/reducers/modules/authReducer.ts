import { auth } from '../../../constants/index';
import { createReducer } from "../../../utils";
import jwtDecode from 'jwt-decode';

interface IUser {
    token: string | null;
    userName: string | null;
    isAuthenticated: boolean | null;
    isAuthenticating: boolean | null;
    statusText: string | null;
}

interface ITokenDecoder {
    userName: string | null;
}

const initialState: IUser = {
    token: null,
    userName: null,
    isAuthenticated: null,
    isAuthenticating: null,
    statusText: null
}

export default createReducer(initialState, {
    [auth.LOGIN_REQUEST]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            isAuthenticating: true,
            statusText: "Logging in..."
        }) 
    },
    [auth.LOGIN_SUCCESS]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            isAuthenticated: true,
            isAuthenticating: false,
            token: payload.token,
            userName: jwtDecode<ITokenDecoder>(payload.token).userName,
            statusText: 'You have been successfully logged in.'
        })
    },
    [auth.LOGIN_FAIL]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            isAuthenticated: false,
            token: null,
            userName: null,
            statusText: `Authentication Error: ${payload.status} ${payload.statusText}`
        })
    },
    [auth.LOGOUT_REQUEST]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            isAuthenticated: false,
            statusText: "Logging out..."
        })
    },
    [auth.LOGOUT_FINISHED]: (state: any, payload: any) => {
        return Object.assign({}, state, {
            statusText: "You have been successfully logged out."
        })
    },
})