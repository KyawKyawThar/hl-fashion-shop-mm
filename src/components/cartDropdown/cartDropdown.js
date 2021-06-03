import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cartSelector';

import CartItem from '../cartItems/cartItem';

import CustomButton from '../custom-buttom/custom-buttom';
import './cartDropdown.scss';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  //cart ka rootReducer ka , cartItems ka cartReducer ka
  return {
    cartItems: selectCartItems(state),
  };
};
export default connect(mapStateToProps)(CartDropDown);
