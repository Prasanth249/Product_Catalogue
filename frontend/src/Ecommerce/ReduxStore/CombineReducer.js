import { combineReducers } from "redux";
import ProductReducer from "./ProductReducer";


const RootReducer = combineReducers({
  product_details: ProductReducer,

});

export default RootReducer;
