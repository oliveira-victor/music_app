import styled from "styled-components";
import { colors } from "../../styles/colors";
import { Button } from "../../styles";

export const LoginForm = styled.form`
    width: 100%;
    color: ${colors.lightBg};

    @media (max-width: 767px) {
        text-align: center;
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