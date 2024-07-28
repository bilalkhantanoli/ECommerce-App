import { combineReducers } from 'redux';
import favoriteReducer from './favoriteReducers';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    favorites: favoriteReducer,
    cart: cartReducer,
});

export default rootReducer;
