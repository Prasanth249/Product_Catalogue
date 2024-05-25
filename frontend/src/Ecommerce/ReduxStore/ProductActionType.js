import { ADD_PRODUCT } from "./ProductAction";

function ProductActionType(productDetials){
    console.log("In the productActionType",productDetials)
     return {
        type: ADD_PRODUCT,
        product: productDetials
    }
}

export default ProductActionType;