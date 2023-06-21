import {takeEvery, put} from 'redux-saga/effects'
import {PRODUCT_LIST, SET_PRODUCT_LIST,PRODUCT_SEARCH} from './constant';

function* getProducts(){
    let data= yield fetch("http://localhost:3500/product");
    data = yield data.json()
    console.log("first action called", data);
    yield put({type: SET_PRODUCT_LIST,data})
}

function* searchProducts(data){
    let result =yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result =yield result.json()
    console.warn("first action called",result)
    yield put({type:SET_PRODUCT_LIST,data:result})
    // console.log("calll apt here")
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getProducts)
    yield takeEvery(PRODUCT_SEARCH,searchProducts)
}

export default productSaga;

