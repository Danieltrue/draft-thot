import styled from "styled-components";

const LoggedNavstyle = styled.nav`
  height: 80px;
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
      min-width: 20%;
      .detail {
        display: flex;
        align-items: center;
        p {
          margin-right: 10px;
          text-transform: capitalize;
        }
      }
      li {
        margin-left: 10px;
        button {
          margin-left: 10px !important;
          background-color: var(--brandcolor);
          font-size: 80%;
          padding: 0.5rem 1rem;
          color: #fff;
          border-radius: 20px;
          a {
            color: inherit;
          }
        }
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
    }
  }
`;

export default LoggedNavstyle;
