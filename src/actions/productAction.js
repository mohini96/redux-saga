import {call,put} from 'redux-saga/effects';
import axios from 'axios';

export function* getProduct() {
    debugger;
    const productdata = yield call(getProductApi);
    debugger;
    let products = productdata.data.data;
    console.log("product",products);
    yield put({ type: 'GET_PRODUCT', products });
    /*else
    {
        let str = 'Error Fetching Data.';
        yield put({type:'ERROR',str});
    }*/
}
function getProductApi(){
    debugger;
    return axios({
        method:'get',
        url:'http://192.168.200.159:3005/api/userdata/product',
    });
}
export  function* addProduct(data) {
    try{
        const productsave=yield call(addProductApi,data);
        console.log("productsave",productsave);
        yield put({type:'ADD_PRODUCT',payload:productsave});

    }catch(error){
        console.log("error while Login ")
    }
}
function addProductApi(data){
    return axios({
        method: 'post',
        url: 'http://192.168.200.159:3005/api/userdata/product/add',
        data: data.payload
    });
}
export  function* removeProduct(id) {
    debugger;
    try{
        const productremove=yield call(removeProductApi,id);
        console.log("productremove",productremove);
        debugger;

        yield put({type:'DELETE_PRODUCT',payload:id});

    }catch(error){
        console.log("error while Login ")
    }
}
function removeProductApi(id){

    return axios({
        method: 'delete',
        url: 'http://192.168.200.159:3005/api/userdata/product/delete/'+id.payload,
       //data: id.payload
    });
}

export  function* updateProduct(data) {
    debugger;
    try{
        const productupdate=yield call(updateProductApi,data);
        debugger;
        console.log("productupdate",productupdate);
        yield put({type:'UPDATE_PRODUCT',payload:productupdate});

    }catch(error){
        console.log("error while Login ")
    }
}
function updateProductApi(data){
    debugger;
    return axios({
        method: 'post',
        url: 'http://192.168.200.159:3005/api/userdata/product/add',
        data: data.payload
    });
}
