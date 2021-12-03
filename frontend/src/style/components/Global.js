import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 
:root {
    --logo: "Forte", sans-serif;
    --brandcolor: #0099ee;
    --brandshadow: #f6f6f6;
    --branddark: #212121;
    --cardh5: 'Roboto', sans-serif;
    --error: red;
    --success: green;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    cursor: default;
  }

  html {
    font-size: 1.2rem;
    font-family: 'Mulish', sans-serif;
    text-rendering: optimizeLegibility;
    color: #212121;
    cursor: default
  }

  .logo {
    font-family: var(--logo);
    font-size: 170%;
    color: var(--brandcolor);
    a {
      color: inherit;
    }
  }
  .cta {
    width: 300px;
    color: #fff;
    border-radius: 3px;
    background-color: var(--brandcolor);
    font-size: 80%;
    padding: 0.5rem 0;
    position: relative;
    height: 40px;
    a {
      position: absolute;
      border-radius: 3px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  
`;

export default Global;
