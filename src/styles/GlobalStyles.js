import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:ital,wght@0,400;0,900;1,700&display=swap');
  //font-family: 'Lobster', cursive;
  //font-family: 'Montserrat', sans-serif;
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      background-color: #082032;
      font-family: 'Montserrat', sans-serif;
    }
    
    h2 {
      font-weight: lighter;
      font-size: 3.5rem;
    }
    
    h3 {
      color: white;
    }
    
    h4 {
      font-weight: bold;
      font-size: 2rem;
    }
    
    span {
      font-weight: bold;
      color: #C1F4C5;
    }
    
    a {
      font-size: 1.1rem;
    }
    
    p {
      padding: 3rem 0;
      color: #ccc;
      font-size: 1.4rem;
      line-height: 150%;
    }
    
`

export default GlobalStyles;