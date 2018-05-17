import {call,put} from 'redux-saga/effects';
import axios from 'axios';
export function* userLogout() {
    localStorage.removeItem('user');
    yield put({type:'LOGOUT_USER'})
}

function loginApiCall(data) {
    debugger
    return axios({
        method: 'post',
        url: 'http://192.168.200.159:3005/api/userdata/login',
        data: data.payload
    });
}
export function* userLogin(data) {
    try{
        const user=yield call(loginApiCall,data);
        localStorage.setItem('user',user.data.data[0].name);
        yield put({type:'LOGIN_USER',payload:user});

    }catch(error){
        console.log("error while Login ")
    }

}
