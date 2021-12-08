import styled from "styled-components";

const Loginstyle = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
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
        small {
          width: 100%;
          font-size: 60%;
          visibility: hidden;
          color: var(--error);
        }
        small.error {
          visibility: visible;
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
        input.error {
          border: 1px solid var(--error);
        }
        button {
          margin-top: 0.5rem;
        }
        button:disabled {
          opacity: 0.5;
        }
      }
    }
  }
`;

export default Loginstyle;
