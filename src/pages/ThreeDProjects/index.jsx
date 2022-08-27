import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Link } from 'react-router-dom';
import {Models} from '../../constants/MODELS.jsx';
import * as S from './style';

export default function ThreeDProjects() {

    return (
        <>
            <S.CountText><b>Total: 6 projects</b></S.CountText>
            <ImageList
            // sx={{ width: 500, height: 450 }}
            sx={{ padding: '10px', margin: 'initial' }}
            cols={3}
            >
                {Models.map((item, key) => (
                    <Link to={`/three-d-projects/${key}`}>
                        <ImageListItem sx={{ height: 'initial' }} key={item.img}>
                        <img
                            src={`https://2022-koreauniv-dataton.s3.ap-northeast-2.amazonaws.com/3d-Model/${item.name}.png?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`https://2022-koreauniv-dataton.s3.ap-northeast-2.amazonaws.com/3d-Model/${item.name}.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    </Link>
                ))}
            </ImageList>
        </>
    );
}

const itemData = [

];
