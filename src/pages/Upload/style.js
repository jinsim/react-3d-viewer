import styled from 'styled-components';

export const ImageLabel = styled.label `
    /* background-color: rgba(203, 203, 210, 0.15); */
    border-radius: 15px;
    border: 1px #1976d2 dashed;
    color: black;
    cursor: pointer;
    height: 300px;
    display: inline-block;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 17px;
    margin: 20vh auto;
    &:hover{
        opacity: 0.2;
        & + div{
            background-color: white;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
            transform: translate( -50%, -50% );
            & >p{
                font-size: 157px;
            }
        }
    }
`;
export const ImageInput = styled.input `
    display: none;
`;
export const Container = styled.div `
    width: 100%;
`;
export const ImgText = styled.div `
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    top: 35vh;
    font-size: 60px;
    opacity: 0;
    transition: opacity .2s, visibility .2s;
`;
