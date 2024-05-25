import Login from './Ecommerce/LoginPage/Login';
import Home from './Ecommerce/Home/Home'
import Register from './Ecommerce/RegistrationFormWithSingleFile/Register';
import Cart from './Ecommerce/Cart/Cart';
import MenProducts from './Ecommerce/Men&WomenProducts/MenProducts';
import WomenProducts from './Ecommerce/Men&WomenProducts/WomenProducts';
import WishList from './Ecommerce/WishList/WishList';
import About from './Ecommerce/About/About'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ProductDetails from './Ecommerce/ProductDetails/ProductDetails';
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
         <Route path='/' element={<Login/>}/>
         <Route path='/home' element={<Home/>} />
         <Route path='/registration' element={<Register/>}/>
         <Route path='/about' element={<About/>} />
         <Route path='/cart' element={<Cart/>}/>
         <Route path='/womenProducts' element={<WomenProducts/>} />
         <Route path='/menproducts' element={<MenProducts/>}/>
         <Route path='/wishList' element={<WishList/>} />
         <Route path='/productDetails' element={<ProductDetails/>} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
