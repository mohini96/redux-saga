import _ from 'lodash';
import {ADD_PRODUCT,GET_PRODUCT,DELETE_PRODUCT,UPDATE_PRODUCT} from './constants';

const initial={
    data:[],
    fetching:false
};
export default (state=initial,action) => {
    switch (action.type) {
        case GET_PRODUCT:
            debugger;
            return _.cloneDeep({data:[...action.products],fetching:true});
        case ADD_PRODUCT:
            let data = {...state};
            data.data.push(action.product);
            data.fetching=false;
            return {product:_.cloneDeep({...data})};
        case 'DELETE_PRODUCT':
            //................
            const deluser =  state;
            debugger;
            console.log(deluser);
            const index = _.findIndex(deluser, {'id': action.payload.payload});
            console.log(index);
            console.log("deleted user",deluser);
            deluser.splice(index,1);
            console.log("deleted user",deluser);
            debugger;
            console.log(deluser);
            return { ...state,product:_.cloneDeep(deluser)};

        case 'UPDATE_PRODUCT':
            debugger;
            const updateProduct = state.product;
            const findid = action.payload.id;
            const indexfind = _.findIndex(updateProduct, {'id': findid});
            updateProduct[indexfind] = action.payload;
            return { ...state,product:_.cloneDeep(updateProduct)};
        default:
            return state;
    }
};