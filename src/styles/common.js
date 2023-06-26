import { css } from 'styled-components';

export const ModalBackground = css`
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.6);
`;

export const flexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const flexAlignCenter = css`
    display: flex;
    align-items: center;
`;

export const title = css`
    font-size: 5.1rem;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
`;

export const widthHeight = css`
    width: 100%;
    height: 100%;
`;
