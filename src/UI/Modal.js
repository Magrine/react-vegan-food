import styled from "styled-components"
import reactDom from "react-dom"

const Modal = (props) =>{
    return (
      <>
        {reactDom.createPortal(
          <Backdrop />,
          document.getElementById("modal_overlay")
        )}
        {reactDom.createPortal(
          <Overlay>{props.children}</Overlay>,
          document.getElementById("modal_overlay")
        )}
      </>
    );
}

export default Modal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Overlay = styled.div`


  position: fixed;
  top: 10%;
  width: 60%;
  max-height: 80%;
  margin-left: 20%;
  overflow-y: scroll;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;