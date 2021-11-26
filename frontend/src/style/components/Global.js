import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 
:root {
    --logo: "Forte", sans-serif;
    --brandcolor: #0099ee;
    --brandshadow: #f6f6f6;
    --branddark: #212121;
    --cardh5: 'Montserrat', sans-serif;
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
  }
  .cta {
    width: 300px;
    color: #fff;
    padding: 0.5rem 0;
    border-radius: 3px;
    background-color: var(--brandcolor);
    font-size: 80%;
  }
  
`;

export default Global;
