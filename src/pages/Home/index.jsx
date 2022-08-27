import React, { useState, useEffect } from 'react'
import './style.css';
import * as S from './style';

function Home() {
    const boxList = document.querySelectorAll('.box');
    const options = {
        root: null, // viewport
        rootMargin: "50px",
        threshold: 0.83, // 50%가 viewport에 들어와 있어야 callback 실행
    };
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, options);
    useEffect(() => {
        boxList.forEach(el => observer.observe(el));
    })
    // 반복문을 돌려 모든 DOM에 적용
    boxList.forEach(el => observer.observe(el));
    return (
        <>
            <S.Introduction>
                <S.Title>Neural Rendering</S.Title>
                <S.TextOne>Hosting 3D projects on the Internet</S.TextOne>
                <S.TextTwo>Try posting Your own project more vividly with 3js</S.TextTwo>
            </S.Introduction>
            <section className="black-bg diff-desc-image-wrap2">
                <h2><span>KU</span>&nbsp;Makerspace</h2>
                <div className="wrap">
                    <div className="box">🛠 내가 원하는 물건을 직접 설계하고</div>
                    <div className="box">⚙️ 제작해볼 수 있는 공간</div>
                    <div className="box">📇 3D 프린터</div>
                    <div className="box">✂️ 레이저커터</div>
                    <div className="box">🖨 티셔츠 프린터기</div>
                    <div className="box">🎐 프로그램 자수기</div>
                    <div className="box">🎛 CNC</div>
                    <div className="box">🪚 목공실 등</div>
                    <div className="box">💡 다양한 최신 제작툴을 구비한 곳.</div>
                    <div onClick={(e) => window.open("https://kums.korea.ac.kr/")} className="box click"><span><b>KU</b>&nbsp;Makerspace 바로 가기 ➪</span></div>
                </div>
            </section>
            <section className="black-bg diff-desc-image-wrap">
                <h2>Why 3D Model?</h2>
                <div>
                    <div className="desc">
                        <p className="up-on-scroll">메타버스 및 AR/VR 시대.</p>
                        <p className="up-on-scroll">기존 2D 이미지/동영상을 넘어</p>
                        <p className="up-on-scroll">3D 모델을 활용하여 실감성을 느껴보세요.</p>
                        <p className="up-on-scroll">딥러닝 NeRF 기술을 이용하여</p>
                        <p className="up-on-scroll">3D로 실감나게 구현된 하드웨어 메이커 작품들!</p>
                        <p className="up-on-scroll">자유롭게 구경해보세요.</p>
                        <a href="/three-d-projects" className="up-on-scroll button">3D 프로젝트 보러가기 ➪</a>

                    </div>
                    <div className="image-wrap">
                        <img src="https://images.unsplash.com/photo-1643729041856-97ef566c07e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2864&q=80"
                            alt="" />
                    </div>
                </div>
            </section>
            <S.BottomWrapper>
                <S.CompanyName>Neural Rendering</S.CompanyName>
                <S.BottomMenu>
                    E-mail: neuralrendering@gmail.com
                </S.BottomMenu>
            </S.BottomWrapper>
        </>
    );
}
export default Home;