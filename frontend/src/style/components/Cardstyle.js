import styled from "styled-components";

const Cardstyle = styled.div`
  min-height: 220px;
  height: inherit;
  border-radius: 3px;
  border: 1px solid #eee;
  margin: 10px 5px;
  transition: all 0.5s;
  &:hover {
    box-shadow: 3px 2px 10px var(--brandshadow);
  }
  .__card__inner {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
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
    .thought__category {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 0.3rem;
      margin-top: 1rem;
      li {
        background-color: var(--brandshadow);
        display: flex;
        justify-content: center;
        align-self: center;
        padding: 0.2rem;

        a {
          font-size: 70%;
          &:hover {
            color: var(--brandcolor);
          }
        }
      }
    }
  }
  .option_button {
    position: relative;
    .card__option {
      background-color: #fff;
      width: 100px;
      height: 100px;
      position: absolute;
      z-index: 10;
      top: 40%;
      left: -450%;
      border-radius: 3px;
      box-shadow: 3px 2px 10px var(--brandshadow);
    }
  }
`;

export default Cardstyle;
