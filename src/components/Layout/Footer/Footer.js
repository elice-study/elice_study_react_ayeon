import styled from 'styled-components';
import { flexCenter } from '../../../styles/common';

function BasicFooter() {
    return (
        <F.Footer>
            <F.CopyrightBox>
                {/* <!-- ⓒ --> */}
                <p>Copyright ⓒ 2023 DoubleBuild Co. All rights reserved.</p>
            </F.CopyrightBox>
        </F.Footer>
    );
}

export default BasicFooter;

const Footer = styled.footer`
    width: 100%;
    height: 200px;
`;

const CopyrightBox = styled.div`
    ${flexCenter}
    width: 100%;
    height: 100%;

    p {
        text-align: center;
        font-style: italic;
    }
`;

const F = {
    Footer,
    CopyrightBox,
};
