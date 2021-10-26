import styled from "styled-components";
import { GiHighGrass } from "react-icons/gi";


const HeaderLogo = () =>{
    return (
      <Logo>
        <GiHighGrass />
        <span>Vegan Food</span>
      </Logo>
    );

}

export default HeaderLogo;


const Logo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  font-size: 36px;
  color: #60ba62;
  span {
    color: #5f5f5f;
    font-size: 32px;
    font-weight: lighter;
    margin: 0;
    user-select:none;
  }
`;