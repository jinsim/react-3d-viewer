import React from 'react';
import * as S from './style';

function Home() {
    return (
        <>
            <S.Introduction>
                <S.Title>Neural Rendering</S.Title>
                <S.TextOne>Hosting 3D projects on the Internet</S.TextOne>
                <S.TextTwo>Try posting Your own project more vividly with 3js</S.TextTwo>
            </S.Introduction>
            {/* <S.ScrollContainer> */}
                <S.KUMKS>
                    <div className='animate'>KU Makerspace</div>
                    <div className='trigger'></div>
                </S.KUMKS>
            {/* </S.ScrollContainer> */}
            {/* <S.ThreeDModel>
                    <S.Text>내가 원하는 물건을 직접 설계하고 제작해볼 수 있는 공간.</S.Text>
                    <S.Text>3D프린터, 레이저커터, 티셔츠 프린터기, 프로그램 자수기, CNC, 목공실 등 다양한 최신 제작툴을 구비한 곳.</S.Text>
                <S.Title>Why 3D Model?</S.Title>
                <S.Text>메타버스 및 AR/VR 시대.</S.Text>
                <S.Text>기존 2D 이미지/동영상을 넘어 3D 모델을 활용하여 실감성을 느껴보세요.</S.Text>
                <S.Text>딥러닝 NeRF 기술을 이용하여 3D로 실감나게 구현된 하드웨어 메이커 작품들!</S.Text>
                <S.Text>자유롭게 구경해보세요.</S.Text>
            </S.ThreeDModel> */}
        </>
    );
}
export default Home;