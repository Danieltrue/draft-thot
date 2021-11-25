import styled from "styled-components";

const Cardstyle = styled.div`
  min-height: 220px;
  border-radius: 3px;
  border: 1px solid #eee;
  .__card__inner {
    padding: 1rem;
    .__author__detail {
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        margin-bottom: 1rem;
        figure {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
          }
        }
        hgroup {
          margin-left: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: end;
          h5 {
            font-size: 100%;
            text-transform: capitalize;
            font-weight: 500;
            font-family: var(--cardh5);
          }
          p {
            text-transform: capitalize;
            font-size: 80%;
            opacity: 0.6;
          }
        }
      }
    }
    .body {
      p {
        font-size: 80%;
      }
    }
    .__postfeatures__ {
      margin-top: 1rem;
      display: flex;
      a {
        margin-right: 0.4rem;
        font-size: 90%;
        display: flex;
        p {
          font-size: 80%;
          opacity: 0.8;
        }
      }
    }
  }
`;

export default Cardstyle;
