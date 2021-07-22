import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family:sans-serif,Tahoma, Helvetica, Arial, Roboto, ;
    transition: all 0.50s linear;
     
  }
   
  `;
