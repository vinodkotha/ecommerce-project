import userReducer from "./user/user.reducer";
import cartToggleReducer from "./cart-toggle/cart-toggle.reducer";
import { combineReducers } from "redux";

export default combineReducers({ userReducer, cartToggleReducer });
