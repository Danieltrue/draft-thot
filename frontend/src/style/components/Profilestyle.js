import styled from "styled-components";

const Profilestyle = styled.div`
  .profile_image {
    width: 100%;
    background-color: #212112;
    height: 16rem;
    .image__inner {
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-image: url(${(props) => props.image});
      background-position: center;
      background-size: cover;
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      padding: 1rem;
      p {
        font-size: 140%;
        color: #fff;
        text-transform: capitalize;
      }
    }
  }
`;

export default Profilestyle;
