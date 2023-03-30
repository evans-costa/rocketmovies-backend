import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
    color: ${({ theme }) => theme.COLORS.WHITE_900}; 
    
    font-size: 1.6rem;
    font-family: 'Roboto Slab', serif;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    font-family: 'Roboto Slab', serif;
  }
  
  button, a {
    cursor: pointer;
    transition: opacity 0.2s;
  }

  button:hover, a:hover {
    opacity: 0.5;
  }
`