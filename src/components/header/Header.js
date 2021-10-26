import styled from "styled-components";
import HeaderCart from "./HeaderCart";
import HeaderLogo from "./HeaderLogo";
import HeaderImg from "./HeaderImg";

const Header = (props) =>{
   return (
     <>
       <HeaderDiv>
         <HeaderLogo />
         <HeaderCart onShowCart={props.onShowCart} />
       </HeaderDiv>
       <HeaderImg />
     </>
   );
    
};

export default Header;

const HeaderDiv = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 5rem;
  background-color:#fafafa;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;