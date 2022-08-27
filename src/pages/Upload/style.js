import styled from 'styled-components';

export const CImg = styled.img `
    width: 100%;
    height: 100%;
    object-fit: cover;
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
                font-size: 120px;
            }
        }
    }
    
`;
export const Container = styled.div `
    width: 100%;
    height: 100vh;
`;
export const ImgText = styled.div ``;