import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";

const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        ...action.payload.product,
                        size: action.payload.size,
                        color: action.payload.color,
                    },
                ],
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter((product) => product.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default cartReducer;