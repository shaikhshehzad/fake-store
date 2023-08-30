import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const setUsersList = (users) =>{
  return{
    type : ActionTypes.SET_USERS_LISTS,
    payload :users ,
  }
} 

export const selectUser = (user) => {
  console.log(" ===========>>>>>>",user)
  return {
    type : ActionTypes.CURRENT_USER ,
    payload : user ,

  }
}

export const removeSelectedUser = () => {
  return {
    type: ActionTypes.RESET_CURRENT_USER,
  };
};

