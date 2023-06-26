import styled from 'styled-components';
import { useState } from 'react';
import movieData from '../../database/movieData.json';
import MvList from './components/List/MvList';
import MvInfo from '../Modal/components/Movie/MvInfo';

function HomePage() {
    const [mvList, setMvList] = useState(movieData.movies);
    const [mvInfo, setMvInfo] = useState(false);

    // Modal Open
    const onOpenModal = (movieId) => {
        setMvInfo(true);
        onShowModal(movieId);
    };

    // Modal Detail
    const onShowModal = (movieId) => {
        const movieModal = mvList.find((movie) => movie.movieId === movieId);
        setMvInfo(movieModal);
        document.body.style.overflow = 'hidden';
    };

    // Modal Close
    const onCloseModal = () => {
        setMvInfo(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <H.Main>
                {mvInfo && <MvInfo mvInfo={mvInfo} onClose={onCloseModal} />}

                <H.ContentsBox>
                    {mvList.map((list) => {
                        return <MvList list={list} key={list.movieId} onOpenModal={onOpenModal} />;
                    })}
                </H.ContentsBox>
            </H.Main>
        </>
    );
}

export default HomePage;

const Main = styled.div`
    width: 1200px;
    margin: auto;
`;

const ContentsBox = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
`;

const H = {
    Main,
    ContentsBox,
};
