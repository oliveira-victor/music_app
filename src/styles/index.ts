import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Exo', sans-serif;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 28px;
        color: #fff;
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
    background: rgb(10,10,10);
    background: linear-gradient(144deg, rgba(10,10,10,1) 23%, rgba(105,46,122,1) 100%);
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

export const Label = styled.label`
    font-size: 20px;
    display: block;
    margin-top: 20px;
`

export const Input = styled.input`
    margin-top: 10px;
    color: ${colors.highlight};
    width: 100%;
    height: 52px;
    border: none;
    padding: 8px;
    font-size: 20px;
    background-color: transparent;
    border-bottom: 2px solid ${colors.lightBg};
    outline-color: none;

    &:focus {
            outline: none;
            border-color: ${colors.highlight};
        }
`

export default GlobalStyle