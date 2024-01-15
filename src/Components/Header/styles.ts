import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Header = styled.header`
    color: ${colors.lightBg};
    width: 100%;
    height: 80px;
    padding: 0 40px;
    display: flex;
    align-items: center;

    @media (min-width: 768px) {
        position: fixed;
    }

    span {
        color: ${colors.highlight};
    }
`