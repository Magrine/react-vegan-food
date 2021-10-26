import { useContext } from "react";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import styled from "styled-components";
import CartContext from "../../Store/cart-context";
const Cart = (props) =>{
    const cartCtx = useContext(CartContext);
    const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;

    const cartFoodRemove = (id) => {
      cartCtx.removeFood(id)
    };
    const cartFoodAdd = (food) =>{
     cartCtx.addFood({...food, amount: 1})
    };

    const cartFoods = (
      <ul>
        {cartCtx.foods.map((food) => (
          <li>
            <div className="img">
              <img src={food.img} alt="imagem"></img>
            </div>
            <div className="text">
              <h1>{food.name}</h1>
              <p>{food.description}</p>
              <div className="sum">
                <div className="sum_text">
                  <h1>{`$ ${food.price.toFixed(2)}`}</h1>
                  <h2>{`x ${food.amount}`}</h2>
                </div>
                <div className="add_remove">
                  <Button onClick={cartFoodRemove.bind(null, food.id)}>-</Button>
                  <Button onClick={cartFoodAdd.bind(null, food)}>+</Button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
    return (
      <Modal>
        <SelectedFood>
          {cartFoods}
          <div className="total">
            <div>
              <h1>Amount</h1>
              <h1>{totalAmount}</h1>
            </div>
            <div className="buttons">
              <Button onClick={props.onHideCart}>Close</Button>
              <Button>Sand</Button>
            </div>
          </div>
        </SelectedFood>
      </Modal>
    );
}

export default Cart;

const SelectedFood = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #5f5f5f;
  padding: 20px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      display: flex;
      margin-bottom: 30px;
    }
    .img {
      width: 15%;
      img {
        max-width: 100%;
        border-radius: 20px 0 0 20px;
      }
    }
    .text {
      width: 85%;
      padding:10px;
      h1 {
        padding: 16px 0;
        margin: 0;
        border-bottom: 2px dotted #4444;
      }
      p {
        padding: 16px 0;
        margin: 0;
        border-bottom: 2px dotted #4444;
      }
    }
    .sum {
      display: flex;
      align-content: center;
      justify-content:space-between;
      margin-top: 20px;
      h1 {
        margin: 0;
        padding: 0;
        border: none;
      }
      h2 {
        background-color: whitesmoke;
        padding: 4px 10px;
        align-items: center;
        border-radius: 5px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        font-size: 24px;
        margin: 0 0 0 32px;
      }
      .sum_text{
        display:flex
      }
      .add_remove{
        Button{
          width:40px;
          height:40px;
          margin-left:10px;
        }
      }
    }
  }

  .total {
    margin: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 0;
      padding: 0;
      font-size: 26px;
    }
    .buttons {
      display: flex;
      flex-direction: column;
    }
    Button {
      margin-top: 5px;
      width: 150px;
    }
  }
`;