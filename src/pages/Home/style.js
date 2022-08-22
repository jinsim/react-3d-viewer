import styled from 'styled-components';

export const Introduction = styled.div `
    width: 100vw;
    height: 700px;
    display: flex;
    flex-direction: column;
    animation-fill-mode: both;
    animation-duration: 1000ms;
    animation-delay: 0ms;
    animation-iteration-count: 1;
    opacity: 1;
    animation-name: react-reveal-868937163638756-1;
    @keyframes react-reveal-868937163638756-1 {
        0%   {opacity: 0; transform: translate3d(0px, 25px, 0px);}
        100% {opacity: 1; transform: none;}
    }
`;
export const Title = styled.div `
    font-size: 50px;
    color: #1976d2;
    margin: auto auto 0 auto;
    font-family: monospace;
    font-weight: 700;
    letter-spacing: .3rem;
    text-shadow: grey 2px 2px 2px;
`;
export const TextOne = styled.div `
    font-size: 20px;
    margin: 30px auto 0px auto;
    font-family: monospace;
`;
export const TextTwo = styled.div `
    font-size: 20px;
    margin: 10px auto auto auto;
    font-family: monospace;
`;
export const ScrollContainer = styled.div `
`;
export const KUMKS = styled.div `
    height: 4000px;
    .animate {
        position: sticky;
        top: 45vh;
        opacity: 0.5;
        font-size: 40px;
        width: 100%;
        height: 90px;
        text-align: center;
        color: #1976d2;
    }
    .trigger {
        width: 100%;
        height: 10px;
        margin-bottom: 900px;
    }
`;

