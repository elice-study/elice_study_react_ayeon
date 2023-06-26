import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

/* 
styled - reset
npm i styled-reset
*/

const GlobalStyles = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        margin: 0 auto;
        color: ${({ theme }) => theme.PALETTE.fontColor};
    }

    body {
        background-color: ${({ theme }) => theme.PALETTE.black};
    }

    button {
        border: none;
    }

    ul > li {
        list-style: none;
    }
`;

export default GlobalStyles;
