export const addItemToCartGrouping = (existingCartItems, addedCartItem) => {
  const newItemContains = existingCartItems.find(
    (cartItem) => cartItem.id === addedCartItem.id
  );

  if (newItemContains) {
    //if the new cart item id matches with existing cartItem id increament quantity +1
    return existingCartItems.map((cartItem) =>
      cartItem.id === addedCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 } //this is the way of creating new object with new element quantity
        : cartItem
    );
  } else {
    //if not matches just simply add new quantity propery and return new array
    return [...existingCartItems, { ...addedCartItem, quantity: 1 }];
  }
};
