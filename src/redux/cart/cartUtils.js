export const addItemsToCart = (cartItems, cartItemsToAdd) => {
  const existingCartItems = cartItems.find((cartItem) => {
    return cartItem.id === cartItemsToAdd.id;
  });

  if (existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemsToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

export const removeItemsFromCart = (cartItems, cartItemsToRemove) => {
  const exisitingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemsToRemove.id;
  });

  if (exisitingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemsToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemsToRemove.id
      ? //decrease the quantity
        { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
