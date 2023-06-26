import styled from 'styled-components';
import MovieList from './components/List/MovieList';
import { useState } from 'react';
import movieData from '../../database/movieData.json';
import MovieModal from '../Modal/components/Movie/MovieModal';

function HomePage() {
    const [movieList, setMovieList] = useState(movieData.movies);
    const [movieModal, setMovieModal] = useState(false);

    console.log(movieModal, '1');

    // Modal Open
    const onModalOpen = (movieId) => {
        console.log(movieId, 'onmodalopen');
        onShowMovieModal(movieId);
    };

    console.log(movieModal, '2');

    // Modal Detail
    const onShowMovieModal = (movieId) => {
        const movieModal = movieList.find((movie) => movie.movieId === movieId);
        console.log(movieModal, 'modal==movieid');
        setMovieModal(movieModal);
        document.body.style.overflow = 'hidden';
    };

    // Modal Close
    const onModalClose = () => {
        setMovieModal(false);
        document.body.style.overflow = 'unset';
    };

    console.log(movieModal, '4');

    return (
        <>
            <H.Main>
                {movieModal && <MovieModal movieModal={movieModal} onClose={onModalClose} />}

                <H.ContentsBox>
                    {movieList.map((list) => {
                        return <MovieList list={list} key={list.movieId} onModalOpen={onModalOpen} />;
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
