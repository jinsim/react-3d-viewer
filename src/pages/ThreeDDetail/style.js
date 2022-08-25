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
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;
export const ThreeDBox = styled.div `
    width: 500px;
    height: 500px;
    border: 2px solid #1976d2;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;
export const InfoBox = styled.div `
    margin-left: 20px;
    width: 50%;
`;
export const ProjectInfo = styled.div `
    h3 {
        font-size: 18px;
        font-weight: 900;
        margin: 25px 0 10px 0px;
    }
    pre {
        white-space: break-spaces;
        margin-top: 0;
        margin-left: 10px;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.5;
    }

`;
export const Title = styled.div `
    font-size: 23px;
    font-family: monospace;
    font-weight: 700;
    letter-spacing: .05rem;
    color: #1976d2;
    margin-bottom: 10px;
`;
export const IntroductionBox = styled.div ``;
export const ProcessBox = styled.div ``;
export const ToolBox = styled.div ``;
export const MakerInfo = styled.div `
    pre {
        margin: 0;
        margin-left: 10px;
        font-size: 15px;
        font-weight: 700;
        line-height: 1.7;
    }
`;

