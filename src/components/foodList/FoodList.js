import styled from "styled-components";
import food1 from "../../assets/1.png";
import food2 from "../../assets/2.png";
import food3 from "../../assets/3.png";
import food4 from "../../assets/4.png";
import food5 from "../../assets/5.png";
import food6 from "../../assets/6.png";
import FoodItem from "./FoodItem";

const DUMMY_FOODS = [
  {
    id: "1",
    img: food1,
    name: "CHORIPAN",
    description:
      "Mini baguette bread, vegetable sausage, vinaigrette and chimichurri sauce",
    price: 12,
  },
  {
    id: "2",
    img: food2,
    name: "GREEN PANCAKE",
    description:
      "With traditional or Greek rice (white or whole), beans, mashed potatoes or French fries, cooked vegetables and salad",
    price: 20,
  },
  {
    id: "3",
    img: food3,
    name: "PASTAS",
    description:
      "Penne, Spaghetti and Fusilli with a choice of wholegrain pasta or gluten free pasta (white)",
    price: 22,
  },
  {
    id: "4",
    img: food4,
    name: "SEITAN STEAK",
    description:
      "Accompaniments: White Rice, Vinaigrette, Farofa and Vegan Vegetables",
    price: 25,
  },
  {
    id: "5",
    img: food5,
    name: "FEIJOADA",
    description:"The famous feijoada with white or wholemeal rice, manioc flour farofa, braised cabbage, vinaigrette and pepper sauce",
    price: 30,
  },
  {
    id: "6",
    img: food6,
    name: "SALAD",
    description:"Salads are culinary preparations made up of many different foods, often with contrasting colors and usually cold foods.",
    price: 7,
  },
];

const FoodList = () => {
  return (
    <List>
      {DUMMY_FOODS.map((food) => (
        <FoodItem
          key={food.id}
          id={food.id}
          name={food.name}
          img={food.img}
          description={food.description}
          price={food.price}
        ></FoodItem>
      ))}
    </List>
  );
};

export default FoodList;

const List = styled.section`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
  max-width: 1200px;
  width: 90%;
  padding: 50px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px auto;
`;