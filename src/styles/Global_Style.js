import { createGlobalStyle } from "styled-components";

const Styled_Global_Styles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: #082032;
    //line-height: 1.5;
    -webkit-font-smoothing: antialiased;
   
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  
  h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  
  h3 {
    color: white;
  }
  
  h4 {
    font-weight: bold;
  }
  
  a {
    font-size: 1.1rem;
  }
  
  p {
    padding: 3rem 0;
    color: #F6F6F6;
    font-size: 1.4rem;
  }
  
`

export default Styled_Global_Styles;