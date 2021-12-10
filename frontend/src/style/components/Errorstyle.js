import styled from "styled-components";

const Errorstyle = styled.div`
  width: 100%;
  height: 100%;
  font-size: 70%;
  background-color: var(--errorLight);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  p {
    color: var(--error);
  }
`;

export default Errorstyle;
