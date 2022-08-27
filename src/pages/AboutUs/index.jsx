import React from 'react';
import * as S from './style';
import useScrollFadeIn from '../../hooks/useScrollFadeIn'

function AboutUs() {
    const scrollFadeIn1 = useScrollFadeIn();
    const scrollFadeIn2 = useScrollFadeIn();
    const scrollFadeIn3 = useScrollFadeIn();
    const scrollFadeIn4 = useScrollFadeIn();
    const scrollFadeIn5 = useScrollFadeIn();
    return (
        <>
            <S.TeamImg></S.TeamImg>
            <S.TeamIntroduction {...scrollFadeIn1}>
                <S.Title>Who are we?</S.Title>
                <S.Text>
                    <b>AI Computer Vision</b>, 그리고 <b>Web에서의 3D 모델 시각화</b>에 관심이 있는 <span><b>고려대학교 학부생</b></span>들이 한 팀으로 모였습니다.
                    <br/><br/>팀장이 <b><span>KU Makerspace</span></b>에서 매니저 활동을 한 경험을 살려 본 프로젝트 진행을 리드하였습니다.
                    <br/><br/>AI의 경우 평상시 AI Computer Vision을 공부한 것을 바탕으로 <b>3D 모델을 제작하기 위한 딥러닝 NeRF 모델</b>을 개발하였습니다.
                    Web 개발은 '멋쟁이사자처럼 고려대학교' 학회 출신들이 진행하였습니다.
                </S.Text>
            </S.TeamIntroduction>
            <S.TeamVision {...scrollFadeIn2}>
                <S.Title>What is our vision?</S.Title>
                <S.Text>
                    우리의 비전은 <mark><b>'창의적인 아이디어를 가지고 있는 메이커들을 지원하여 참가 팀들의 아이디어 검증 및 경쟁력을 상승시키는 것'</b></mark>입니다.
                    <br/><br/>이를 위해, 메이커 작품의 <b><i>3D 모델 구현</i></b>, <b><i>메이커 작품 아카이브 기능</i></b>, <b><i>교내 메이커 활동 지원 프로그램 홍보</i></b> 를 넘어 다양한 방안들을 모색하고자 합니다.</S.Text>
            </S.TeamVision>
            <S.TeamMembers>
                <S.AboutWrapper {...scrollFadeIn3}>
                    <S.AboutContent>
                        Members
                    </S.AboutContent>
                    <S.Line></S.Line>
                </S.AboutWrapper>
                <S.TeamWrapper {...scrollFadeIn4}>
                    <S.TeamMember style={{ marginRight: '10vw' }}>
                        <S.MemberProfile>
                            <S.ProfileImageOne></S.ProfileImageOne>
                        </S.MemberProfile>
                        <S.MemberName>이재승</S.MemberName>
                        <S.MemberName>Leader & Machine Learning Engineer</S.MemberName>
                        <S.IntroBreak></S.IntroBreak>
                        <S.MemberIntro>▪ 고려대학교 통계학과 17</S.MemberIntro>
                        <S.MemberIntro>/ SW벤처융합전공 7기</S.MemberIntro>
                        <S.MemberIntro>▪ 고려대학교 인공지능대학원 학부연구생</S.MemberIntro>
                        <S.MemberIntro>▪ 고려대학교 KU메이커스페이스 매니저</S.MemberIntro>
                        <S.MemberIntro>▪ 멋쟁이사자처럼 고려대학교 6기</S.MemberIntro>
                        <S.MemberIntro>▪ 2021 한국형 아이코어(I-Corps) 특별상 수상 (과기부 주관 / 고려대학교 총장상))</S.MemberIntro>
                        <S.IntroBreak></S.IntroBreak>
                        <S.IntroText>"통계적 머신러닝/딥러닝 기술을 활용하여</S.IntroText>
                        <S.IntroText>인류의 문제를 해결하는데 기여하고 싶은 사람입니다."</S.IntroText>
                    </S.TeamMember>
                    <S.TeamMember>
                        <S.MemberProfile>
                            <S.ProfileImageTwo></S.ProfileImageTwo>
                        </S.MemberProfile>
                        <S.MemberName>서현수</S.MemberName>
                        <S.MemberName>Machine Learning Engineer</S.MemberName>
                        <S.IntroBreak></S.IntroBreak>
                        <S.MemberIntro>▪ 고려대학교 기계공학부 18</S.MemberIntro>
                        <S.MemberIntro>/ 인공지능융합전공</S.MemberIntro>
                        <S.MemberIntro>▪ 고려대학교 소프트웨어 개발 연구 학회 DevKor Computer Vision 팀리더</S.MemberIntro>
                        <S.MemberIntro>▪ 스타트업 개발자 근무</S.MemberIntro>
                        <S.MemberIntro>▪ 고려대학교 창업팀 CTO</S.MemberIntro>
                        <S.MemberIntro>▪ NeRF 등 3D Computer Vision 관련 개발 경험</S.MemberIntro>
                        <S.IntroBreak></S.IntroBreak>
                        <S.IntroText>"사회 문제 해결을 통해</S.IntroText>
                        <S.IntroText>세상에 이름을 남기고 싶은 개발자입니다."</S.IntroText>
                    </S.TeamMember>
                </S.TeamWrapper>
                <S.TeamWrapper {...scrollFadeIn5}>
                    <S.TeamMember style={{ marginRight: '10vw' }}>
                        <S.MemberProfile>
                            <S.ProfileImageThree></S.ProfileImageThree>
                        </S.MemberProfile>
                        <S.MemberName>김범진</S.MemberName>
                        <S.MemberName>Full-Stack Developer</S.MemberName>
                        <S.IntroBreak></S.IntroBreak>
                        <S.MemberIntro>▪ 고려대학교 보건환경융합과학부 18</S.MemberIntro>
                        <S.MemberIntro>/ SW벤처융합전공 8.5기</S.MemberIntro>
                        <S.MemberIntro>▪ 멋쟁이사자처럼 고려대학교 8기</S.MemberIntro>
                        <S.MemberIntro>▪ 고려대학교 SK LOOKIE 4기 회장</S.MemberIntro>
                        <S.MemberIntro>▪ 고려대학교 수강신청 알리미 팀장</S.MemberIntro>
                        <S.MemberIntro>▪ 고려대학교 SW 교육봉사단</S.MemberIntro>
                        <S.IntroBreak></S.IntroBreak>
                        <S.IntroText>"지식을 기반으로 경험을 쌓고, 경험을 바탕으로</S.IntroText>
                        <S.IntroText>실용적인 SW를 개발하고 싶은 개발자입니다."</S.IntroText>
                    </S.TeamMember>
                    <S.TeamMember>
                        <S.MemberProfile>
                            <S.ProfileImageFour></S.ProfileImageFour>
                        </S.MemberProfile>
                        <S.MemberName>전혜린</S.MemberName>
                        <S.MemberName>Front-End Developer</S.MemberName>
                        <S.IntroBreak></S.IntroBreak>
                        <S.MemberIntro>▪ 고려대학교 중어중문학과 19</S.MemberIntro>
                        <S.MemberIntro>/ SW벤처융합전공 9기</S.MemberIntro>
                        <S.MemberIntro>▪ 멋쟁이사자처럼 고려대학교 9기</S.MemberIntro>
                        <S.MemberIntro>▪ 2020 고려대학교 인공지능 프로젝트 우수상</S.MemberIntro>
                        <S.MemberIntro>▪ 스타트업 Front-End 개발자 근무</S.MemberIntro>
                        <S.MemberIntro>▪ 고려대학교 SW 교육봉사단</S.MemberIntro>
                        <S.IntroBreak></S.IntroBreak>
                        <S.IntroText>"컴퓨터 지식에 대한 이해와 함께 인문학적 소양을</S.IntroText>
                        <S.IntroText>갖춘 개발자가 되고 싶은 사람입니다."</S.IntroText>
                    </S.TeamMember>
                </S.TeamWrapper>
            </S.TeamMembers>
        </>
    );
}
export default AboutUs;