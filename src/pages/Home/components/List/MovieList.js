import styled from 'styled-components';

function MovieList({ list, onModalOpen }) {
    const { movieId, posterImageFileName, title } = list;

    const onClickModalBtn = () => {
        onModalOpen(movieId);
        console.log(movieId);
    };

    return (
        <M.ImgBox onClick={onClickModalBtn}>
            <img src={`img/movie-img/${posterImageFileName}`} alt={title} id={`${movieId}`} />
        </M.ImgBox>
    );
}

export default MovieList;

const ImgBox = styled.div`
    img {
        width: 290px;
        height: 408px;
        border-radius: 2%;
        transition: all 0.3s ease-out;
    }

    img:hover {
        transform: translateY(-1rem);
        cursor: pointer;
    }
`;

const M = { ImgBox };
