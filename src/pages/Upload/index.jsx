import React from 'react';
import * as S from './style';

function Upload() {
    return (
        <S.Container>
            <S.CImg src={'./img/upload.png'} />
            <S.ImgText>
                <p>Coming Soon</p>
            </S.ImgText>
        </S.Container>
    );
}

export default Upload;