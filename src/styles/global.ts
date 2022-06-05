import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
font-family: 'Poppins', sans-serif;

html {
    background-color: #E5E5E5;
}

p {font-family: 'Poppins', sans-serif;}

th {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    text-align: left;
    

}
tr {font-family: 'Poppins:wght@500', sans-serif;}

td {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 140%;

    align-items: center;
}

td.bold {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    display: flex;
    align-items: center;
}
h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 100%;
    /* identical to box height, or 32px */


    /* Neutral Colors/Black */

    color: #34423D;
}

h2 {
    /* Heading/16 SB XS */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;

    /* Neutral Colors/Black */

    color: #34423D;


    /* Inside auto layout */

}
button {
    font-family: 'Poppins:wght@600', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
}
`
