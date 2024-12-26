import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiAction } from '../../store/ui';

const CartButton = (props) => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(uiAction.toggle());
  }

  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      {items.length > 0 && <span className={classes.badge} >{items.length}</span>}
    </button>
  );
};

export default CartButton;
