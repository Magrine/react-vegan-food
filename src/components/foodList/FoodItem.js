import { useRef } from "react/cjs/react.development";
import { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import CartContext from "../../Store/cart-context";

const FoodItem = (props) =>{
  const cartCtx = useContext(CartContext)
  const amountinputRef = useRef();
  const submitHandle = (event) =>{
    event.preventDefault();
    const enteredAmount = +amountinputRef.current.value
    cartCtx.addFood({
      id: props.id,
      key: props.id,
      img: props.img,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: enteredAmount,
    });
  }


  const [bump, setBump] = useState(false)
  const activeBump = () => {
    setBump(true);
    setTimeout(() => {setBump(false);}, 300);
  }

    return (
      <ListItem onSubmit={submitHandle}>
        <ShowItem>
          <img src={props.img} alt={props.name}></img>
          <h1>{props.name.toUpperCase()}</h1>
          <p>{props.description}</p>
          <h2>{`$ ${props.price.toFixed(2)}`}</h2>
        </ShowItem>
        <Label>Amount</Label>
        <AddCart>
          <Input
            ref={amountinputRef}
            label="Amount"
            input={{
              id: "amount",
              type: "number",
              min: "1",
              max: "10",
              defaultValue: "1",
            }}
          />
          <Button className={bump && "bump"} onClick={activeBump}>Add to cart
          </Button>
        </AddCart>
      </ListItem>
    );
}

export default FoodItem;

const ListItem = styled.form`
  width: 30%;
  padding: 15px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
`;

const Label = styled.label`
  color: #5f5f5f;
  font-size: 18px;
  font-weight: bold;
  background-color:white;
  position:relative;
  top:8px;
  left:16px;
  padding:0 8px;
  border-radius:40px;
`;

const ShowItem = styled.div`
  padding: 24px;
  cursor: pointer;
  h1 {
    text-align: center;
    padding: 16px;
    margin: 0;
    border-bottom: 2px dotted #4444;
  }
  p {
    text-align: center;
    padding: 16px 8px;
    margin: 0;
    border-bottom: 2px dotted #4444;
    min-height:100px;
  }
  h2 {
    color: #60ba62;
    text-align: center;
    font-size: 36px;
  }
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const AddCart = styled.div`
  display: flex;
  justify-content: space-between;
  Input {
    max-width: 50%;
  }
  Button {
    min-width: 40%;
  }
`;