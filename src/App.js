import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Checkout from './ecommerce/CheckoutForm/Checkout/Checkout';
import MenShoe from './ecommerce/MenShoe';
import WomenShoe from './ecommerce/WomenShoe';
import{commerce} from './lib/commerce';
import Cart from './ecommerce/Cart/Cart';
 

const App=()=>{
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
      <div>
          <Navbar totalItems={cart.totalItems}/>
          <Routes>
            <Route path='/' element={<MenShoe products={products} onAddToCart={handleAddToCart}/>}/>
            <Route path='/womenshoes' element={<WomenShoe />}/>
            <Route path='/cart' element={<Cart cart={cart}
             handleUpdateCartQty= {handleUpdateCartQty}
             handleRemoveFromCart={handleRemoveFromCart}
             handleEmptyCart={handleEmptyCart}/>}/>
             <Route path='/checkout' element={<Checkout 
             cart={cart}
             order={order}
             onCaptureCheckout={handleCaptureCheckout}
             error={errorMessage}/>}/>
          </Routes>
      </div>
    )
  }

export default App;