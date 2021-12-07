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
      .my-masonry-grid {
        display: flex;
        width: auto;
      }
      .my-masonry-grid_column {
      }
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
      width: 100% !important;
    }
  }
`;

export default Homestyle;
