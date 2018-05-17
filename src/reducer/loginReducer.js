import {LOGIN,LOGOUT_USER,LOGIN_USER} from './constants'
let initial = {loggedIn:localStorage.getItem('user')?true:false};
export default (state=initial,action) => {
    switch (action.type) {
        case LOGIN:
            return {...state,error:null};
        case LOGIN_USER:
            return {...state,user:action.payload.data,loggedIn:true};
        case LOGOUT_USER:
            return {...state,user:null,loggedIn:false};
        default:
            return{...state}
    }
};