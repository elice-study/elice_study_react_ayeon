import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ModalBackground, flexAlignCenter } from '../../../../styles/common';

function MvInfo({ mvInfo, onClose }) {
    const { posterImageFileName, title, permissibleAge, runningTimeMinutes, creator, castMembers, description } =
        mvInfo;

    const actor = castMembers.join(', ');

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
                            <span>{title}</span>
                            <p>
                                {permissibleAge}세 | {runningTimeMinutes}분
                            </p>
                        </M.Title>

                        <M.MovieContents>
                            <M.Creator>
                                <span>Creator</span>
                                <p>{creator}</p>
                            </M.Creator>

                            <M.Actor>
                                <span>Actor</span>
                                <p>{actor}</p>
                            </M.Actor>

                            <M.Summary>
                                <p>{description}</p>
                            </M.Summary>
                        </M.MovieContents>
                    </M.Movie>

                    <M.MovieImg>
                        <img src={`img/movie-img/${posterImageFileName}`} alt="" />
                    </M.MovieImg>
                </M.MovieMain>
            </M.Content>
        </M.ModalBackGround>
    );
}

export default MvInfo;

const ModalBackGround = styled.div`
    ${ModalBackground}
`;

const Content = styled.div`
    width: 80%;
    padding: 2rem 2.5rem;
    background-color: #212121;
    transform: translate(15%, 20%);
    border-radius: 0.5%;
`;

const Close = styled.div`
    margin: 0 0 0.5rem 0;
    display: flex;
    justify-content: end;

    i {
        color: #ffffff;
        font-size: ${({ theme }) => theme.FONT_SIZE.larger};
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
    width: 800px;
`;

const Movie = styled.div`
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const Title = styled.div`
    display: flex;
    margin: 0 0 1rem 0;
    font-family: 'Noto Sans KR';

    span {
        font-size: 4rem;
        margin-right: 1.5rem;
        font-weight: 600;
    }

    p {
        font-size: ${({ theme }) => theme.FONT_SIZE.large};
        padding-top: 2rem;
    }
`;

const MovieContents = styled.div`
    height: auto;
`;

const Creator = styled.div`
    display: flex;
    font-family: 'Noto Sans KR';

    p {
        font-size: ${({ theme }) => theme.FONT_SIZE.small};
    }

    span {
        margin-right: 1rem;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
        font-weight: 600;
    }
`;

const Actor = styled.div`
    display: flex;
    margin: 1.5rem 2rem 1.5rem 0;
    font-family: 'Noto Sans KR';

    p {
        font-size: ${({ theme }) => theme.FONT_SIZE.small};
    }

    span {
        margin-right: 1rem;
        font-size: ${({ theme }) => theme.FONT_SIZE.medium};
        font-weight: 600;
    }
`;

const Summary = styled.div`
    margin: 0 2rem 0 0;
    width: 780px;
    font-family: 'Noto Sans KR';

    p {
        line-height: 170%;
    }
`;

const MovieImg = styled.div`
    margin: 0 1rem;

    img {
        width: 300px;
        height: 420px;
        border-radius: 4%;
    }
`;

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
