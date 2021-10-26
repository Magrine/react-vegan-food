import React from "react";
import styled from "styled-components";

const Input = React.forwardRef((props, ref) =>{
    return (
      <In ref={ref} {...props.input} />
    );
});



const In = styled.input`
  padding: 8px;
  margin: 0;
  max-height: 30px;
  width: 250px;
  border-radius: 40px;
  border: 2px solid #444;
  color: #5f5f5f;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  flex-grow: 1;
`;



export default Input;
