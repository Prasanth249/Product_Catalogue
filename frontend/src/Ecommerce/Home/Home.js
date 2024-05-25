import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import homeStyle from './Home.module.css';
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ProductActionType from '../ReduxStore/ProductActionType';

function Home() {
  let [productName, setProductName] = useState(' ');
  let [productSubmit, setProductSubmit] = useState(false);
  let [products, setProducts] = useState([]);

  useEffect(() => {
    if (productSubmit) {
      console.log(productName);
      axios.get(`http://localhost:8090/getProductName/${productName}`)
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
          setProductSubmit(false);
        })
        .catch((error) => {
          setProductSubmit(false);
          console.log(error);
        });
    }
  }, [productSubmit]);

  function submit() {
    setProductSubmit(true);
    console.log('In the submit');
  }
  const dispatch = useDispatch()
  function saveSingleProduct(singleProduct) {
    const action = ProductActionType(singleProduct);
    dispatch(action);
      window.location.href= '/productDetails';
}


  return (
    <>
      <Navbar />
      <div className={homeStyle.inputbox}>
        <label>Enter Product Name</label>
        <br />
        < input className={homeStyle.userInput} type="text" onChange={(inputEvent) => setProductName(inputEvent.target.value)} />
        <button onClick={submit} className={homeStyle.submitButton}>search</button>
      </div>
      <div className={homeStyle.allImages}>
        {products.map((product) => (
          <a key={product.productId} onClick={() => {saveSingleProduct(product)}}>
              <img className={homeStyle.image} key={product.productId} src={`data:image/jpeg;base64,${product.productImage}`}
              alt="Product" />
           </a>

        ))}
      </div>
    </>
  );
}

export default Home;
