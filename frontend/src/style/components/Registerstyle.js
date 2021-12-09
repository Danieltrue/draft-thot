import styled from "styled-components";

const Registerstyle = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    .form__inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      .error {
        height: 50px;
        margin-bottom: 0.5rem;
      }
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
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
          color: var(--error);
          visibility: hidden;
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
        .passwords {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          input {
            width: 100%;
          }
        }
        input.error {
          border: 1px solid var(--error);
          color: var(--error);
        }
        small.error {
          visibility: visible;
        }
        small.success {
          visibility: hidden;
        }
        input.success {
          border: 1px solid var(--success);
          color: inherit;
        }
        input[type="file"] {
          appearance: none;
          color: transparent;
          width: 70px;
          position: relative;
          height: 70px;
          border-radius: 50%;
          &::after {
            content: "";
            width: 100%;
            height: 100%;
            background-color: inherit;
            border-radius: 50%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
        button {
          width: 100%;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        button:disabled {
          opacity: 0.5;
        }
      }
    }
  }
`;

export default Registerstyle;
