import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../redux-store/ui-store';

const CartButton = (props) => {

  const dispatch  = useDispatch();

  const toggleCartButtonHandler = ()=>{
    dispatch(uiActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={toggleCartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
