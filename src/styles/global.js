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
        letter-spacing: 0.7px;
    }

    body {
        background-color: ${({ theme }) => theme.PALETTE.black};
    }

    button {
        border: none;
    }
`;

export default GlobalStyles;
