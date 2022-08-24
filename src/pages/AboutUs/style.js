import styled from 'styled-components';

export const TeamImg = styled.img `
    width: 80vw;
    height: 300px;
    display: flex;
    margin: auto;
    object-fit: cover;
    content: url('./img/aboutUs.jpeg');
`;
export const TeamIntroduction = styled.div `
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 50px 0 50px;
`;
export const TeamVision = styled.div `
    height: 250px;
    padding: 50px 50px 0 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const TeamMembers = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;
export const Title = styled.div `
    font-size: 35px;
    font-family: monospace;
    font-weight: 700;
    letter-spacing: .1rem;
    color: #1976d2;
    margin-bottom: 40px;
`;
export const Text = styled.div `
    font-size: 18px;
    text-indent: 15px;
    max-width: 1000px;
`;

export const AboutWrapper = styled.div `
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const AboutContent = styled.div `
    height: 35%;
    width: 85%;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
    color: #1976d2;
`;

export const Line = styled.div `
    border-bottom: 5px solid #1976d2;
    width: 90%;
`;

export const TeamWrapper = styled.div `
    height: 500px;
    /* width: 85%; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const TeamMember = styled.div `
    width: 300px;
    /* height: 100%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const MemberProfile = styled.div `
    width: 90%;
    margin-bottom: 15px;
`;

export const ProfileImageOne = styled.img `
    content: url('./img/member1.png');
    border-radius: 50%;
    border: 1px solid #1976d2;
    width: 90%;
    display: flex;
    margin: auto;
`;

export const ProfileImageTwo = styled.img `
    content: url('./img/member2.png');
    border-radius: 50%;
    border: 1px solid #1976d2;
    width: 80%;
    display: flex;
    margin: auto;
`;

export const ProfileImageThree = styled.img `
    content: url('./img/member3.png');
    border-radius: 50%;
    border: 1px solid #1976d2;
    width: 90%;
    display: flex;
    margin: auto;
`;

export const ProfileImageFour = styled.img `
    content: url('./img/member4.png');
    border-radius: 50%;
    border: 1px solid #1976d2;
    width: 80%;
    display: flex;
    margin: auto;
`;

export const MemberName = styled.div `
    color: #252631;
    font-size: 16px;
    font-weight: 700;
`;

export const IntroBreak = styled.div `
    width: 100%;
    height: 15px;
`;

export const MemberIntro = styled.div `
    font-size: 14px;
`;

export const IntroText = styled.div `
    font-size: 14px;
    font-weight: bold;
    font-style: italic;
`;