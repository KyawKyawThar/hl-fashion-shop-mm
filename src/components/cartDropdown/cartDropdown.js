import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cartSelector';
import { toggleCartHidden } from '../../redux/cart/cartAction';

import CartItem from '../cartItems/cartItem';

import CustomButton from '../custom-buttom/custom-buttom';
import './cartDropdown.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>
            Your Cart is Empty.Please choose someone to buy.
          </span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  //cart ka rootReducer ka , cartItems ka cartReducer ka

  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropDown));
