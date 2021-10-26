import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCart = {
    foods: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
  //ADD FOOD
  if (action.type === "ADD_FOOD") {
    const newAmount =
      state.totalAmount + action.food.amount * action.food.price;
    const existingCartFoodIndex = state.foods.findIndex(
      (food) => food.id === action.food.id
    );
    const existingCartFood = state.foods[existingCartFoodIndex];
    let newFoods;

    if (existingCartFood) {
      const updatedItem = {
        ...existingCartFood,
        amount: existingCartFood.amount + action.food.amount,
      };
    newFoods = [...state.foods];
    newFoods[existingCartFoodIndex] = updatedItem;
  }else{
    newFoods = state.foods.concat(action.food);
  }

  return {
    foods: newFoods,
    totalAmount: newAmount,
  };
}
  //REMOVE FOOD
  if (action.type === "REMOVE_FOOD"){
    const existingCartFoodIndex = state.foods.findIndex(
      (food) => food.id === action.id
    );
    const existingCartFood = state.foods[existingCartFoodIndex];
    const updateTotalAmount = state.totalAmount - existingCartFood.price;
    let updatedItems;
    if (existingCartFood.amount === 1) {
        updatedItems = state.foods.filter(food => food.id !== action.id);
    }else{
      const updatedItem = { ...existingCartFood, amount: existingCartFood.amount - 1};
      updatedItems = [...state.foods]
      updatedItems[existingCartFoodIndex] = updatedItem;
    }
    return {
      foods: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }

  return defaultCart;
};

const CartProvider = (props) =>{
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

    const addFoodToCart = food => {
        dispatchCart({ type: "ADD_FOOD", food: food });
    };

    const removeFoodToCart = id => {
        dispatchCart({ type: "REMOVE_FOOD", id: id });
    };

    const cartContext = {
      foods: cartState.foods,
      totalAmount: cartState.totalAmount,
      addFood: addFoodToCart,
      removeFood: removeFoodToCart,
    };

    return (
      <CartContext.Provider value={cartContext}>
        {props.children}
      </CartContext.Provider>
    );
}

export default CartProvider;