import styled from "styled-components";

const Homestyle = styled.main`
  position: relative;
  & > div {
    /* padding: 0 1rem; */
    .Trending {
      text-transform: uppercase;
      padding: 1rem 0;
      font-size: 90%;
      font-weight: 500;
    }
    menu {
      width: 100%;
      min-height: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      grid-template-rows: masonry;
    }
  }

  @media screen and (max-width: 1400px) {
    & > div {
      padding: 0 1rem;
    }
  }
  @media screen and (max-width: 900px) {
    menu {
      display: grid;
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media screen and (max-width: 700px) {
    menu {
      display: grid;
      grid-template-columns: repeat(1, 1fr) !important;
    }
  }
`;

export default Homestyle;
