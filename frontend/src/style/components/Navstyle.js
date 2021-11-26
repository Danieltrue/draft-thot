import styled from "styled-components";

const Navstyle = styled.nav`
  height: 80px;
  background-color: red;
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 2px 9px var(--brandshadow);
  display: flex;
  align-items: center;
  padding: 0 1rem;
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      font-size: 80%;
      li {
        button {
          background-color: var(--brandcolor);
          font-size: 80%;
          padding: 0.5rem 1rem;
          color: #fff;
          border-radius: 20px;
          margin-left: 10px;
          a {
            color: inherit;
          }
        }
      }
    }
  }
`;

export default Navstyle;
