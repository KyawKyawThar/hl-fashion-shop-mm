import './cartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cartAction';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cartSelector';

const CartIcon = ({ toggleCartHidden, itemCounts }) => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
      <span className='item-count'>{itemCounts}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemCounts: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  //cartAction
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
