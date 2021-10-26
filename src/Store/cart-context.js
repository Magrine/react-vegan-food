import React from "react";
const CartContext = React.createContext({
  foods: [],
  totalAmount: 0,
  addFood: (food) => {},
  removeFood: (id) => {},
});

export default CartContext;