import { checkHttpStatus, parseJSON } from './../../utils';
import { auth } from '../../constants/index';


// export function login(username: string, password: string, redirect: string) {
//     return function(dispatch) {

//     }
// }

interface IAuthenticateError {
    status: number;
    statusMessage: string;
}

export const loginSuccess = (token: string) => {
    localStorage.setItem('token', token);
    return {
        type: auth.LOGIN_SUCCESS
    }
}

export const loginFailed = (error: any) => {
    localStorage.removeItem('token');
    return {
        type: auth.LOGIN_FAILED,
        payload: {
            status: error.response.status,
            message: error.response.message
        }
    }
}

export const loginRequest = () => {
    return {
        type: auth.LOGIN_REQUEST
    }
}

export const login = () => {
    return function (dispatch: any) {
        dispatch(loginRequest())
        return fetch('https://jsonplaceholder.typicode.com/users/1', {
            method: 'GET'
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then(res => {
            try {
                res.token = 'token';
                dispatch(loginSuccess(res.token))

            } catch (err: any) {
                dispatch(loginFailed({ response: { status: 403, message: "Invalid token" } }))
                console.error(err)
            }

        })
        .catch(err => {
            dispatch(loginFailed(err))
            console.error(err)
        })
    }
}
