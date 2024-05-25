import { useSelector } from "react-redux";
import "./ProductDetails.css"
import HomeProduct from "../Navbar/Navbar";
import { useState } from "react";
function ProductDetails() {
  const productDetailsState = useSelector((state) => state.product_details);
  const productDetails = productDetailsState.productDetails;
  const image = productDetailsState.productDetails.productImage;

  console.log(productDetails);

  let [quantity, setQuantity] = useState(0)

  function increasesQuantity(){
    if(quantity >= 0){
      setQuantity(quantity+1)
    }
  }

  function decreaseQuantity(){
    if(quantity >0){
      setQuantity(quantity-1 )
    }
  }

  return (
    <>
    <HomeProduct /><br/>
      <div className="main">
        <div>
          <img className="image" src={`data:image/jpeg;base64,${image}`} />
        </div>
        <div className="details">
          <h2>{productDetails.productName}</h2>
          <span>product price</span>
          <h3>{productDetails.productPrice}</h3>
          <div>
            <button onClick={increasesQuantity}>+</button>
            <span >{quantity}</span>
            <button onClick={decreaseQuantity}>-</button>
          </div>
          <div className="productAddButton">
            <button className="buyNow">Buy now</button>
            <button className="addCart">Add to cart</button>
          </div>
          <span>ProductDescription:</span>
          <p className="description">{productDetails.productDescription}</p>
        </div>
      </div>
      
    </>
  );
}

export default ProductDetails;
