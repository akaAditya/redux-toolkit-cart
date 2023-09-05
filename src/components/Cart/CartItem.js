import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../../redux-store/cart-store';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const dispatch = useDispatch();

  const addCartItemQuantity = ()=>{
    dispatch(cartActions.addItemsToCart({
      id,
      title,
      price
    }))
  }

  const removeItemsFromCart = ()=>{
    dispatch(cartActions.removeItemsFromCArt(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
        ₹{total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(₹{price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemsFromCart}>-</button>
          <button onClick={addCartItemQuantity}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
