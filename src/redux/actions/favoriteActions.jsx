export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (product) =>({
    type: ADD_FAVORITE,
    payload: product
})

export const removeFavorite = (product) =>({
    type: REMOVE_FAVORITE,
    payload: product
})