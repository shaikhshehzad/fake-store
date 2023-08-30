import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};

const initialUsersState ={
  users : []
}

export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};

export const usersReducer = ( state = initialUsersState, { type , payload }) =>{
  switch (type){
  case ActionTypes.SET_USERS_LISTS:
    return {...state , ...payload };
  default :
    return state ;
  }
}

export const selectedUserReducer = (state = {} , {type , payload }) =>{
  switch(type){
    case ActionTypes.CURRENT_USER :
      return { ...state , ...payload };
    case ActionTypes.RESET_CURRENT_USER:
      return {} ; 
    default:
      return state ;
  } 
}