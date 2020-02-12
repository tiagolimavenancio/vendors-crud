const token = localStorage.getItem('token');
const auth = localStorage.getItem('auth');

const initialState = auth ? { loggedIn: true, auth, token } : {}

export function authentication(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                loggingIn: true,
                auth: action.auth,
                token: action.token
            }
        case 'LOGOUT_SUCCESS':
            return {
                loggedIn: false, 
                auth: false,
                token: ''
            }
        default:
            return state
    }
}