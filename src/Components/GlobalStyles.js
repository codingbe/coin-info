import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        display: flex;
        justify-content: center;
    }
    html,body,#root{
        min-width: 1190px;
        height: 100%;
        background-color: #d2d2d2;
        -ms-overflow-style: none;
        ::-webkit-scrollbar { display: none; }
        @media (max-width: 480px) {
            min-width: 100%;
        }
        font-family: 'Noto Sans KR';
    }
    a{
        all: unset;
        cursor: pointer;
    }
`;

export default GlobalStyles;
