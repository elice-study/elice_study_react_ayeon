import styled from 'styled-components';
import { title } from '../../../styles/common';
import BackgroundImg from '../../../assets/img/background-img/1423102065_3.jpg';

function BasicHeader() {
    return (
        <H.Header>
            <H.HeaderBox>
                <H.Title>
                    <span>movmov</span>
                    <p>Enjoy watching your favorite movies!</p>
                </H.Title>
            </H.HeaderBox>
        </H.Header>
    );
}

export default BasicHeader;

const Header = styled.header`
    margin: 0 auto;
    width: 100%;
    height: 600px;
    background: linear-gradient(
            180deg,
            rgba(20, 20, 20, 0) 10%,
            rgba(20, 20, 20, 0.35) 25%,
            rgba(20, 20, 20, 0.45) 50%,
            rgba(20, 20, 20, 18.85) 75%,
            rgba(0, 0, 0, 1) 111%
        ),
        url(${BackgroundImg});
    background-size: cover;
`;

const HeaderBox = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

const Title = styled.div`
    width: 50%;
    padding: 0 5rem;
    display: inline-block;
    margin-top: 18rem;
    color: #ffffff;

    span {
        ${title}
    }

    p {
        font-size: 2rem;
        margin: 1rem auto;
        font-style: oblique;
    }
`;

const H = {
    Header,
    HeaderBox,
    Title,
};
