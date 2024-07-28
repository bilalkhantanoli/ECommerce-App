export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const addToCart = (product, size, color) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            product,
            size,
            color,
        },
    };
};

export const removeFromCart = (id) => ({
    type: REMOVE_FROM_CART,
    payload: id,
})