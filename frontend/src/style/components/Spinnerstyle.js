import styled from "styled-components";

const Spinnerstyle = styled.ul`
  width: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  & > li {
    width: 5px;
    height: 5px;
    background-color: #fff;
    border-radius: 50%;
    margin-left: 4px;
  }
`;

export default Spinnerstyle;
