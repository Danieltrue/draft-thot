import styled from "styled-components";

const Footerstyle = styled.footer`
  min-height: 100px;
  /* position: absolute; */
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--branddark);
  padding: 1rem;
  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    div[class] {
      display: flex;
      align-items: center;
      justify-content: space-between;
      hgroup {
        p {
          color: #fff;
          font-size: 70%;
        }
      }
      ul {
        display: flex;
        li {
          color: #fff;
          a {
            color: inherit;
            font-size: 70%;
          }
          margin-left: 1rem;
        }
      }
    }
    div.year {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      p {
        text-align: center;
        color: #fff;
        font-size: 60%;
      }
    }
  }
`;

export default Footerstyle;
