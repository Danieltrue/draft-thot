import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
 
:root {
    --logo: "Forte", sans-serif;
    --brandcolor: #0099ee;
    --brandshadow: #f6f6f6;
    --cardh5: 'Montserrat', sans-serif;
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

  
`;

export default Global;
