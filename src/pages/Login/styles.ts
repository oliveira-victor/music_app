import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Button } from "../../styles";

export const LoginContainer = styled.div`
    min-height: 100vh;
`

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 94vh;
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 0 8px;
    padding-bottom: 20px;

    @media (max-width: 767px) {
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: center;
        }
`

export const Img = styled.div`
        max-width: 400px;

        img {
            display: block;
            margin: 0 auto;
            width: 100%;

            @media (max-width: 767px) {
                width: 70%;
            }
        }
`

export const FormContainer = styled.div`
    display: flex;
    align-items: center;

`

export const LoginForm = styled.form`
    width: 100%;
    color: ${colors.lightBg};

    @media (max-width: 767px) {
        text-align: center;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 28px;
    }

    label {
        font-size: 20px;
        display: block;
        margin-top: 20px;
    }

    input {
        margin-top: 10px;
        color: ${colors.highlight};
        width: 80%;
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
    }

    p {
        margin-top: 20px;
    }

    img {
        cursor: pointer;
        width: 24px;
    }
`

export const LoginBtn = styled(Button)`
    width: 80%;
    display: block;
    margin-top: 40px;

    @media (max-width: 767px) {
        width: 100%;
        margin-bottom: 40px;
    }
`