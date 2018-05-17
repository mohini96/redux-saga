import { takeLatest } from 'redux-saga/effects';
import { userLogin ,userLogout} from '../actions/loginAction';
import {getProduct,addProduct,removeProduct,updateProduct} from '../actions/productAction';
export function* watcherSaga(){
    debugger;
    yield takeLatest('LOGIN',userLogin);
    yield takeLatest('LOGOUT',userLogout);
    yield takeLatest('GETPRODUCT',getProduct);
    yield takeLatest('ADDPRODUCT',addProduct);
    yield takeLatest('REMOVEPRODUCT',removeProduct);
    yield takeLatest('EDITPRODUCT',removeProduct);
}
