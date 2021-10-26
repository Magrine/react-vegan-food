import styled from "styled-components";
import foods from "../../assets/food.jpg";


const HeaderImg = () =>{
    return (
      <FoodImg>
        <img src={foods} alt="Foods Vegan"></img>
      </FoodImg>
    );

}

export default HeaderImg;; 
     

const FoodImg = styled.div`
  max-width: 100%;
  z-index: 0;
  overflow: hidden;
  img {
    max-width: 100%;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  }
`;