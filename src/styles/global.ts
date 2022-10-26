import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Press Start 2P', cursive;   
        font-size: 0.9rem;
    }

    body,html {
        background: ${({ theme }) => theme.background};

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.primary};
        }
    }

    img {
        width: 100%;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        &:visited {
            color: initial;
        }
    }

    footer {
        background-color: ${({ theme }) => theme.primary};
        color: white;
        padding: .25rem 0;
        text-align: center;
        font-size: 0.8rem;
    }

    .expand{
        position:relative;
        text-decoration:none;
        display:inline-block;

    
        &:after {
            display:block;
            content: '';
            border-bottom: solid 0.15rem ${({theme}) => theme.primary};  
            transform: scaleX(0);  
            transition: transform 250ms ease-in-out;
            transform-origin:100% 50%

        }

        &:hover:after { 
            transform: scaleX(1);
            transform-origin:0 50%;
        }
    }

    .floating { 
        animation-name: floating;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        margin-left: 30px;
        margin-top: 5px;
    }
    
    @keyframes floating {
        0% { transform: translate(0,  0px); }
        50%  { transform: translate(0, 15px); }
        100%   { transform: translate(0, -0px); }   
    }

    .pulse {
        $from: #f5f5f5;
        $to: scale-color($from, $lightness: -10%);
        
        height: 100%;
        width: 100%;
        background: linear-gradient(-90deg, #efefef 0%, #fcfcfc 50%, #efefef 100%);
        background-size: 400% 400%;
        animation: pulse 1.2s ease-in-out infinite;

        @keyframes pulse {
            0% {
            background-position: 0% 0%
            }
            100% {
            background-position: -135% 0%
            }
        }
    }

    .container {
        width: 100%;
        margin: 0 auto;
        max-width: 85rem;
        padding: 0 1rem;

        @media(max-width:1450px) {
            max-width: 70rem;
        }
        @media(max-width:1000px) {
            max-width: 50rem;
        }
        @media(max-width:700px) {
            padding: 0 2rem;
        }
    }

`;
