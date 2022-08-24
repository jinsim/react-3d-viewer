import styled from 'styled-components';

export const TopContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;
export const BackBox = styled.button `
    background: none;
    border: none;
    cursor: pointer;
`;
export const ProjectNameBox = styled.p `
    font-size: 30px;
    color: #1976d2;
    font-weight: 700;
`;
export const ProjectContainer = styled.div `
    margin: 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
export const ThreeDBox = styled.div `
    width: 450px;
    height: 500px;
    border: 2px solid #1976d2;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;
export const InfoBox = styled.div ``;
export const ProjectInfo = styled.div ``;
export const Title = styled.div `
    font-size: 20px;
    font-family: monospace;
    font-weight: 700;
    letter-spacing: .05rem;
    color: #1976d2;
`;
export const IntroductionBox = styled.div ``;
export const ProcessBox = styled.div ``;
export const ToolBox = styled.div ``;
export const MakerInfo = styled.div ``;

