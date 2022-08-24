import styled from 'styled-components';

export const Container = styled.div ``;
export const MiddleContainer = styled.div `
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
export const Title = styled.p  `
    margin-bottom: 10px;
    font-size: 35px;
    font-family: monospace;
    font-weight: 700;
    color: #1976d2;
    span {
        color: #9a0025;
    }
`;
export const Text = styled.p `
    font-size: 18px;
`;

export const LeftAndRight = styled.div `
    display: flex;
    flex-direction: row;
    height: 50vh;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        opacity: 0.4;
    }
    a {
        color: white;
        background-color: #1976d2;
        -webkit-appearance: button;
        -moz-appearance: button;
        appearance: button;
        text-decoration: none;
        width: 340px;
        height: 50px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        span {
            color: #9a0025;
            font-weight: 600;
        }
    }
`;
export const LeftContainer = styled.div `
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        img {
            opacity: 0.7;
        }
    }
`;
export const RightContainer = styled.div `
    width: 50vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        img {
            opacity: 0.7;
        }
    }
`;