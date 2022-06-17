import { combineReducers } from "redux";
import { selectedProducts } from "../action/productActions";
import { productReducer, selectedProduct } from "./productReducer";


const reducer = combineReducers({
    allproducts: productReducer,
    product: selectedProduct,
})

export default reducer;