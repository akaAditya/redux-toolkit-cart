import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { Fragment, useEffect } from "react";
import { uiActions } from "./redux-store/ui-store";
import Notification from "./components/UI/Notification";

let isLoaded = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.isShow);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state)=>state.ui.showStatus)

  useEffect(() => {
    const cartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data",
        })
      );
      const response = await fetch(
        `https://react-redux-cart-e04d6-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!",
          message: "Sent cart data successfully",
        })
      );
    };

    if(isLoaded){
      isLoaded = false;
      return;
    }
    cartData().catch((error) =>
      dispatch(
        uiActions.showNotification({
          status: "failed",
          title: "Error",
          message: "Error in sending cart data",
        })
      )
    );
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
