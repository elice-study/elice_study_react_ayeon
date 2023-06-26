import styled from 'styled-components';

function MovieList({ list, onOpenModal }) {
    const { movieId, posterImageFileName, title } = list;

    const onClickModalBtn = () => {
        onOpenModal(movieId);
    };

    return (
        <M.ImgContainer onClick={onClickModalBtn}>
            <img src={`img/movie-img/${posterImageFileName}`} alt={title} />
        </M.ImgContainer>
    );
}

export default MovieList;

const ImgContainer = styled.div`
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

const M = { ImgContainer };
