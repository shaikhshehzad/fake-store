import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer , usersReducer , selectedUserReducer } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  allUsers : usersReducer ,
  user : selectedUserReducer
});
export default reducers;
