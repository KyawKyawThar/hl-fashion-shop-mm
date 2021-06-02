const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className='cart-Item'>
      <img src={imageUrl} alt='item' />
      <div className='item-detail'>
        <span>{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
