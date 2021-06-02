import { connect } from 'react-redux';
import { addItems } from '../../redux/cart/cartAction';
import CustomButton from '../custom-buttom/custom-buttom';
import './collection-item.scss';

const CollectionItem = ({ item, addItems }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>

      <CustomButton onClick={() => addItems(item)} invented>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addItems: (item) => dispatch(addItems(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
