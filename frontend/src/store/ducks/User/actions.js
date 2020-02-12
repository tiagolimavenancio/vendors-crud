import { userService } from '../../../services/user';

function login(username, password) {
    return dispatch => {

        const payload = {
            username,
            password
        }
        
        userService.post('/auths', payload).then((response) => {
            if(response.data) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('auth', response.data.auth);
                dispatch(setUserDetails(response.data)); 
            }                      
        }).catch((err) => {
            console.log(err);            
        })
    }
}

function logout() {
    return dispatch => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        dispatch(logoutUser());        
    }
}

export function setUserDetails(user) {
    return {
        type: 'LOGIN_SUCCESS',
        auth: user.auth,
        token: user.token
    }
}

export function logoutUser() {
    return {
        type: 'LOGOUT_SUCCESS',
        auth: false,
        token: ''
    }
}

export const userActions = {
    login,
    logout
}