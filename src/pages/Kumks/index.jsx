import React from 'react';
import * as S from './style';

function Kumks() {
    return (
        <S.Container>
            <S.MiddleContainer>
                <S.Title><span>KU</span> Makerspace 란?</S.Title>
                <S.Text>고려대학교 구성원이 원하는 제품을 직접 디자인하고 만들어볼 수 있는 공간입니다.</S.Text>
            </S.MiddleContainer>
            <S.LeftAndRight>
                <S.LeftContainer>
                    <img />
                    <a type='button' href='https://kums.korea.ac.kr/front/event/list.do'><span>KU</span> 메이커스페이스에서 3D프린터 교육 신청하기</a>
                </S.LeftContainer>
                <S.RightContainer>
                    <img />
                    <a type='button' href='https://kums.korea.ac.kr/front/machine/list.do'><span>KU</span> 메이커스페이스에서 3D프린터 사용 예약하기</a>
                </S.RightContainer>
            </S.LeftAndRight>
        </S.Container>
    );
}

export default Kumks;