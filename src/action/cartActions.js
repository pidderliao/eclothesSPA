export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
export const UPDATE_ITEM_UNITS = 'UPDATE_ITEM_UNITS';
export const ADD_TO_DETAIL = 'ADD_TO_DETAIL';

export function addToCart({ id, productImg, productName, productPrice, productSize, units = 1 }) {
    return {
        type: ADD_TO_CART,
        payload: { id, productImg, productName, productPrice, productSize, units }
    }
}
export function deleteFromCart({ id }) {
    return {
        type: DELETE_FROM_CART,
        payload: { id }
    }
}
export function updateItemUnits({ id, units }) {
    return {
        type: UPDATE_ITEM_UNITS,
        payload: { id, units }
    }
}
export function addToDetail({ id, productImg, productName, productPrice, productSize, colorName, units = 1 }) {
    return {
        type: ADD_TO_DETAIL,
        payload: { id, productImg, productName, productPrice, productSize, colorName, units }
    }
}