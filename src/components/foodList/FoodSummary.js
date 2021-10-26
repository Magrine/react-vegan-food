import styled from "styled-components";

const FoodSummary = () => {
  return (
    <Summary>
      <h2>The Best Vegan Food Of World</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        tincidunt erat eu venenatis blandit. Sed sollicitudin nisi ante, a
        posuere odio vulputate at. Duis non eros placerat, faucibus nibh quis,
        sagittis sem. Nullam pulvinar turpis vitae consectetur ultricies. Donec
        convallis metus ut consequat tempus. Vivamus a odio egestas, aliquam
        lectus sit amet, pulvinar massa. Cras eu velit ac odio blandit rhoncus.
      </p>
      <p>
        Donec sed enim velit. Proin vestibulum volutpat ultricies. Integer ut
        varius augue. Donec nisi tortor, tincidunt eget sapien eget, rhoncus
        auctor nisi. Sed tortor nisl, consectetur eget maximus quis, condimentum
        a eros. Nulla diam lorem, egestas id fringilla vitae, faucibus id enim.
        Nullam semper, nulla vitae pretium porttitor, massa ipsum rutrum odio,
        in posuere purus tellus eget nunc.
      </p>
    </Summary>
  );
};

export default FoodSummary;

const Summary = styled.section`
  text-align: center;
  max-width: 1200px;
  width: 90%;
  margin: auto;
  margin-top: -140px;
  position: relative;
  background-color: #383838;
  color: white;
  border-radius: 14px;
  padding: 50px;
  box-shadow: 0 1px 18px 10px rgba(0, 0, 0, 0.25);
  h2 {
    font-size: 42px;
    margin-top: 0;
  }
`;
