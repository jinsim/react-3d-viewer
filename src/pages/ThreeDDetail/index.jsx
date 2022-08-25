import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import * as S from './style';

function ThreeDDetail({match} ) {
    const { objId } = useParams();
    const navigate = useNavigate();
    const project = {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    };
    console.log("detail page", objId);
    return (
        <>
            <S.TopContainer>
                <S.BackBox onClick={() => navigate(-1)}>
                    <ArrowBackIosNewIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                </S.BackBox>
                <S.ProjectNameBox>
                    {project.title}
                </S.ProjectNameBox>
                <div></div>
            </S.TopContainer>
            <S.ProjectContainer>
                <S.ThreeDBox>
                    <img src={project.img} />
                </S.ThreeDBox>
                <S.InfoBox>
                    <S.ProjectInfo>
                        <S.Title>Project Info.</S.Title>
                        <S.IntroductionBox></S.IntroductionBox>
                        <S.ProcessBox></S.ProcessBox>
                        <S.ToolBox></S.ToolBox>
                    </S.ProjectInfo>
                    <S.MakerInfo>
                        <S.Title>Maker Info.</S.Title>
                    </S.MakerInfo>
                </S.InfoBox>
            </S.ProjectContainer>
        </>
    );
}

export default ThreeDDetail;