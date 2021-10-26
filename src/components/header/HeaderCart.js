import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../Store/cart-context";
import { AiOutlineShoppingCart } from "react-icons/ai";


const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);

  const numberFoods = cartCtx.foods.reduce((curNumber, foods) => {
    return curNumber + foods.amount;
  }, 0);





  return (
    <CartBtn onClick={(props.onShowCart)}>
      <div className="icon">
        <AiOutlineShoppingCart />
      </div>
      <div className="text">
        <h2>Your Cart</h2>
      </div>
      <div className="amount">
        <h2>{numberFoods}</h2>
      </div>
    </CartBtn>
  ); 
  
};

export default HeaderCart;

const CartBtn = styled.button`
  padding: 8px 40px;
  border-radius: 40px;
  border: 3px solid #60ba62;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #5f5f5f;
  background-color: #fafafa;
  cursor: pointer;
  transition: 0.5s;
  user-select: none;

  &.bump {
    animation: bump 300ms ease-out;

    @keyframes bump {
      0% {
        transform: scale(1);
      }
      10% {
        transform: scale(0.9);
      }
      30% {
        transform: scale(1.1);
      }
      50% {
        transform: scale(1.15);
      }
      100% {
        transform: scale(1);
      }
    }
  }
  &:hover {
    background-color: #60ba62;
    .icon {
      color: white;
    }
    .text {
      color: white;
    }
    .amount {
      color: white;
    }
  }
  .icon {
    color: #60ba62;
    font-size: 32px;
    transition: 0.5s;
  }
  .text {
    transition: 0.5s;
    h2 {
      margin: 0 20px;
      font-size: 24px;
    }
  }
  .amount {
    transition: 0.5s;
    h2 {
      margin: 0;
      font-size: 24px;
    }
  }
`;
