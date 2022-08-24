import React from 'react';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import * as S from './style';

function Upload() {
    return (
        <>
            <S.Container>
                <S.ImageLabel for="upload-image">
                    <ViewInArIcon />
                    &nbsp; 3D 프로젝트 업로드하기
                </S.ImageLabel>
                {/* <S.ImageInput
                type="file"
                id="upload-image"
                /> */}
                <S.ImgText>
                    <p>Coming Soon</p>
                </S.ImgText>
            </S.Container>
        </>
    );
}

export default Upload;