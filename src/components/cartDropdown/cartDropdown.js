import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cartAction';
import CustomButton from '../custom-buttom/custom-buttom';
import './cartDropdown.scss';

const CartDropDown = ({ cartItems }) => {
  return (
    <div className='cart-dropdown' onClick={toggleCartHidden}>
      <div className='cart-items' />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ a: { cartItems } }) => {
  return {
    cartItems,
  };
};
export default connect(mapStateToProps)(CartDropDown);
