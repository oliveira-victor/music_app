import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

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
    animation-name: ${FadeIn};
    animation-duration: 1s;
    transition: all .2s ease;

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