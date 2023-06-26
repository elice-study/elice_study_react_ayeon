import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ModalBackground, flexAlignCenter } from '../../../../styles/common';

function MovieModal({ onClose }) {
    return (
        <M.ModalBackGround>
            <M.Content>
                <M.Close onClick={onClose}>
                    <i>
                        <FontAwesomeIcon icon={faXmark} />
                    </i>
                </M.Close>

                <M.MovieMain>
                    <M.Movie>
                        <M.Title>
                            <span>title</span>
                            <p>나이세 | 시간분</p>
                        </M.Title>

                        <M.MovieContents>
                            <M.Creator>
                                <span>Creator</span>
                                <p>감독</p>
                            </M.Creator>

                            <M.Actor>
                                <span>Actor</span>
                                <p>배우</p>
                            </M.Actor>

                            <M.Summary>
                                <p>대사</p>
                            </M.Summary>
                        </M.MovieContents>
                    </M.Movie>

                    <M.MovieImg>
                        <img src="" alt="" />
                    </M.MovieImg>
                </M.MovieMain>
            </M.Content>
        </M.ModalBackGround>
    );
}

export default MovieModal;

const ModalBackGround = styled.div`
    ${ModalBackground}
`;

const Content = styled.div`
    width: 80%;
    padding: 1.2rem;
    background-color: #000;
    transform: translate(15%, 20%);
    border-radius: 0.5%;
`;

const Close = styled.div`
    margin: 0 0 0.5rem 0;
    display: flex;
    justify-content: end;

    i {
        color: #ffffff;
        font-size: 2.2rem;
        font-weight: 1000;
    }

    i:hover {
        text-decoration: none;
        cursor: pointer;
    }
`;

const MovieMain = styled.div`
    ${flexAlignCenter}
    justify-content: space-between;
`;

const Movie = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.div`
    display: flex;
    margin: 1rem;

    span {
        font-size: 4rem;
        margin-right: 1.5rem;
    }

    p {
        font-size: 2rem;
        padding-top: 2rem;
    }
`;

const Creator = styled.div`
    display: flex;
    margin: 1rem;

    p {
        font-size: 1.3rem;
    }

    span {
        margin-right: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
`;

const Actor = styled.div`
    display: flex;
    margin: 1rem;

    p {
        font-size: 1.3rem;
    }

    span {
        margin-right: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
`;

const Summary = styled.div`
    margin: 1rem;
    width: 800px;

    p {
        line-height: 170%;
    }
`;

const MovieImg = styled.div`
    img {
        width: 320px;
        height: 480px;
        border-radius: 4%;
    }
`;

const MovieContents = styled.div``;

const M = {
    ModalBackGround,
    Content,
    Close,
    MovieMain,
    Movie,
    Title,
    MovieContents,
    Creator,
    Actor,
    Summary,
    MovieImg,
};
