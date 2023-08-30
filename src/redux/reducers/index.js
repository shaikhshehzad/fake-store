import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer , usersReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  allUsers : usersReducer
});
export default reducers;
