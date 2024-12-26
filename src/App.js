import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { fetchCartData, sendCartData } from './store/customAction';
import Notification from './components/notification/Notification';

let inital = true;

function App() {
  const showCart = useSelector(state => state.ui.CartIsVisible);
  const cart = useSelector(state => state.cart);
  const change = useSelector(state => state.cart.cartChange);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if (inital) {
      inital = false;
      return;
    }

    if (change) {
      dispatch(sendCartData(cart));
    }

  }, [cart, dispatch, change])

  return (
    <>
      {notification && <Notification {...notification} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
