import { ADD_PRODUCT } from "./ProductAction";

let initialState = {
  productDetails: [],
  names:"nikku"
};

function ProductReducer(state = initialState, action) {
  console.log(action.type, ADD_PRODUCT);
  console.log(action.product);
  switch (action.type) {
    case ADD_PRODUCT:
      console.log("in the ADD_PRODUCT");
      return {
       
        productDetails: action.product,
      };
    default:
      return state;
  }
}

export default ProductReducer;