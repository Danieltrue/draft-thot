import styled from "styled-components";

const Writestyle = styled.div`
  & > div {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & > div {
      width: 90%;
      form {
        width: 100%;
        margin-top: 3rem;
        div {
          width: 100%;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          textarea {
            width: 100%;
            background-color: #eee;
            padding: 1rem;
            &::placeholder {
              font-size: 70%;
            }
          }
          button {
            align-self: flex-end;
            width: 100px;
            border-radius: 20px;
          }
        }
      }
    }
  }
`;

export default Writestyle;
