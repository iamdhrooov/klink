import {css} from 'emotion';

const app = css`
font-family: 'Poppins';
font-size: 14px;
line-height: 1.42857143;
color: #333;
padding-top: 55px;
`;

const links = css`
display: flex;
justify-content: center;
padding: 20px 0;
`;

const li = css`
margin: 0 20px;
list-style: none;
`;

const resume = css`
position: absolute;
bottom: 20px;
right: 20px;
color: #1AADE3;
`;

export default {
    app,
    links,
    li,
    resume
}