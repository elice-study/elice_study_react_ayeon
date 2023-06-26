import styled from 'styled-components';
import MovieList from './components/List/MovieList';
import { useState } from 'react';
import movieData from '../../database/movieData.json';
import MovieModal from '../Modal/components/Movie/MovieModal';

function HomePage() {
    const [movieList, setMovieList] = useState(movieData.movies);
    const [modal, setModal] = useState(false);

    console.log(movieList.map((el) => el.movieId));

    // Modal Open
    const onModalOpen = (movieId) => {
        setModal((prev) => !prev);
        onShowMovieModal(movieId);
        document.body.style.overflow = 'hidden';
    };

    // Modal Detail
    const onShowMovieModal = (movieId) => {
        const modal = movieList.find((movie) => movie.id === movieId);
        setModal(modal);
    };

    // Modal Close
    const onModalClose = () => {
        setModal(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <H.Main>
                {modal && <MovieModal modal={modal} onClose={onModalClose} />}

                <H.ContentsBox>
                    {movieList.map((list) => {
                        console.log(list);
                        return <MovieList list={list} key={list} onModalOpen={onModalOpen} />;
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
