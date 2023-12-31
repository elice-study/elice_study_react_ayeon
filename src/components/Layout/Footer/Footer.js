import styled from 'styled-components';
import { flexCenter, widthHeight } from '../../../styles/common';

function BasicFooter() {
    return (
        <F.Footer>
            <F.Copyright>
                {/* <!-- ⓒ --> */}
                <p>Copyright ⓒ 2023 DoubleBuild Co. All rights reserved.</p>
            </F.Copyright>
        </F.Footer>
    );
}

export default BasicFooter;

const Footer = styled.footer`
    width: 100%;
    height: 200px;
`;

const Copyright = styled.div`
    ${flexCenter}
    ${widthHeight}

    p {
        text-align: center;
        font-style: italic;
    }
`;

const F = {
    Footer,
    Copyright,
};
