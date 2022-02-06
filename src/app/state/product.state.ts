export enum ProductActionsType {
  GET_ALL_PRODUCTS = '[Product] Get All Products',
  GET_SELECTED_PRODUCTS = '[Product] Get Selected Products',
  GET_AVAILABLE_PRODUCTS = '[Product] Get Available Products',
  SEARCH_PRODUCTS = "[Product] Search Products",
  NEW_PRODUCT = "[Product] New Product",
  SELECT_PRODUCT = "[Product] Select/Unselect a Product",
  EDIT_PRODUCT = "[Product] Edit a Product",
  DELETE_PRODUCT = "[Product] Delete a Product"
}
export interface ActionEvent{
  type: ProductActionsType;
  payload?: any;
}


export enum DataState {
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T> {
  dataState: DataState,
  data?: T,
  errorMessage?: string
}
