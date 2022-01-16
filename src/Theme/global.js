import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
    --primary-color: #082032;
    --accent-color: #FF4C29;
    --text-color: #f6f6f6;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
h1,h2,h3, h4,h5,p,span  {
    font-family: 'Roboto', sans-serif;
}
`
