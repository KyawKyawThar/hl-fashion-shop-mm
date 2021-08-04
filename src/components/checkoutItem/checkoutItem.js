import { connect } from 'react-redux';
import { addItems, clearItem, removeItems } from '../../redux/cart/cartAction';
import './checkoutItem.scss';

const CheckOutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <div className='name'>{name}</div>
      <div className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </div>
      <div className='price'>${price}</div>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapStateToDispatch = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItems(item)),
    removeItem: (item) => dispatch(removeItems(item)),
    clearItem: (item) => dispatch(clearItem(item)),
  };
};

export default connect(null, mapStateToDispatch)(CheckOutItem);
