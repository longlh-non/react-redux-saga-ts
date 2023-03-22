import { auth } from '../../constants/index';


// export function login(username: string, password: string, redirect: string) {
//     return function(dispatch) {

//     }
// }

export const loginSuccess = (token: string) => {
    localStorage.setItem('token', token);
    return {
        type: auth.LOGIN_SUCCESS,
        payload: {
            token
        }
    }
}
