import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ThreeScene from '../../components/ThreeScene';
import * as S from './style';
import {Models, DetailInfo} from '../../constants/MODELS.jsx'

function ThreeDDetail({match} ) {
    const { objId } = useParams();
    const navigate = useNavigate();
    const obj = Models[objId]
    const objInfo = DetailInfo[obj.name]
    console.log(obj, objInfo);

    console.log("detail page", objId);
    return (
        <>
            <S.TopContainer>
                <S.BackBox onClick={() => navigate(-1)}>
                    <ArrowBackIosNewIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                </S.BackBox>
                <S.ProjectNameBox>
                    {objInfo.title}
                </S.ProjectNameBox>
                <div></div>
            </S.TopContainer>
            <S.ProjectContainer>
                <S.ThreeDBox>
                    <ThreeScene objSrc='https://2022-koreauniv-dataton.s3.ap-northeast-2.amazonaws.com/3d-Model/eevee.obj' objPos={[0, 0, 0]} camPos={[0,0,2]}/>
                </S.ThreeDBox>
                <S.InfoBox>
                    <S.ProjectInfo>
                        <S.Title>Project Info.</S.Title>
                        <S.IntroductionBox>
                            <h3>소개</h3>
                            <pre>{objInfo.description}</pre>
                        </S.IntroductionBox>
                        <S.ProcessBox>
                            <h3>제작 과정</h3>
                            <pre>{objInfo.production}</pre>
                        </S.ProcessBox>
                        <S.ToolBox>
                            <h3>이용 장비</h3>
                            <pre>{objInfo.tool}</pre>
                        </S.ToolBox>
                    </S.ProjectInfo>
                    <S.MakerInfo>
                        <S.Title>Maker Info.</S.Title>
                        <pre>이름 : {objInfo.makerName}</pre>
                        <pre>나이 : {objInfo.makerAge}</pre>
                        <pre>소속 : {objInfo.makerMajor}</pre>
                    </S.MakerInfo>
                </S.InfoBox>
            </S.ProjectContainer>
        </>
    );
}

export default ThreeDDetail;