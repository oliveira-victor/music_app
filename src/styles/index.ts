import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Exo', sans-serif;
    }

    .container {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 2%;
    }
`

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${colors.darker};
    min-height: 100vh;
`

export const LinkStyle = styled.span`
    color: ${colors.highlight};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const Button = styled.button`
    background-color: ${colors.highlight};
    color: ${colors.neutral};
    font-size: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: ${colors.highlightHover};
    }
`

export default GlobalStyle