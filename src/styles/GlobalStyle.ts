import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background: linear-gradient(to top, ${({ theme }) => theme.primary}, ${({ theme }) => theme.background});
        color: ${({ theme }) => theme.text};
    }
`