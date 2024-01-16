import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/colors";
import { Button } from "../../styles";

const FadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

export const NewAccountContainer = styled.div`
    color: ${colors.lightBg};
    animation-name: ${FadeIn};
    animation-duration: 1s;
    transition: all .2s ease;
    width: 50%;

    @media (max-width: 767px) {
        width: 90%;
        margin-top: 40px;
    }
`

export const InputEye = styled.div`
    position: relative;

    img {
        cursor: pointer;
        width: 24px;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-10px, 26px);
    }
`

export const RadioContainer = styled.div`
    margin-top: 20px;
    font-size: 20px;

    div {
        margin-bottom: 10px;
    }

    input[type='radio'] {
        width: 30px;
        accent-color: ${colors.highlight};
    }
`

export const SubmitBtn = styled(Button)`
    display: block;
    margin-top: 40px;

    @media (max-width: 767px) {
        margin: 40px auto;
    }
`