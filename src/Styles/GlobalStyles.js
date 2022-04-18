import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;

    a {
        text-decoration: none;
    }
}
`;

export default Global;
