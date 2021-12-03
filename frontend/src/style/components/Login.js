import styled from "styled-components";

const Loginstyle = styled.div`
  & > div {
    & > div {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      h3 {
        width: 100%;
        text-align: center;
      }
    }
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      div {
        margin-top: 0.5rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        label {
          font-size: 80%;
          width: 100%;
        }
        input {
          width: 100%;
          padding: 0.5rem 1rem;
          background-color: #eee;
          border-radius: 3px;
          font-size: 80%;
          &::placeholder {
            font-size: 90%;
          }
        }
        button {
          margin-top: 0.5rem;
        }
      }
    }
  }
`;

export default Loginstyle;
