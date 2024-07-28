import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriteActions";

const initialState = [];

const favoriteReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_FAVORITE:
            return [...state, action.payload];

        case REMOVE_FAVORITE:
            return {
                ...state,
                items: state.items.filter((product) => product.id !== action.payload.id)
            };
        default:
            return state
    }

};

export default favoriteReducer;