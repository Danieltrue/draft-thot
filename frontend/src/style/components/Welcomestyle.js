import styled from "styled-components";

const Welcomestyle = styled.div`
  display: flex;
  height: 100vh;
  .image__boud {
    width: 50%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1493585552824-131927c85da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    .__head__news__ {
      display: flex;
      height: 90%;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 1rem;
      color: #ffffff;
      width: 80%;
      p,
      a {
        color: inherit;
      }
    }
  }
  .__welcome__ {
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
    .main__stream {
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      hgroup {
        text-align: center;
        h6 {
          font-family: var(--logo);
          font-size: 170%;
          color: var(--brandcolor);
        }
        p {
          margin-top: 0.5rem;
          font-size: 90%;
        }
      }
      .__button__ {
        button {
          width: 300px;
          color: #fff;
          padding: 0.5rem 0;
          border-radius: 3px;
          background-color: var(--brandcolor);
        }
        p {
          font-size: 70%;
          margin-top: 0.5rem;
          span {
            color: var(--brandcolor);
            text-decoration: underline;
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
`;

export default Welcomestyle;
