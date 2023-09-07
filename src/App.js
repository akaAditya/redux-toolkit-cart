import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./redux-store/cart-action-creator";

let isLoaded = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.isShow);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state)=>state.ui.showStatus)

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isLoaded) {
      isLoaded = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
    {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
