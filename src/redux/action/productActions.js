import { ActionTypes } from "../contents/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCT,
        payload: products
    }

}

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }

}