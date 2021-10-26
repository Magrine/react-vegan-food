import styled from "styled-components";

const Button = styled.button`
  padding: 8px;
  margin: 0;
  min-height: 30px;
  border-radius: 40px;
  border: 2px solid #60ba62;
  color: #5f5f5f;
  background-color: #fafafa;
  cursor: pointer;
  transition: 0.5s;
  user-select: none;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    background-color: #60ba62;
    color: #fafafa;
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
  }
`;

export default Button;
