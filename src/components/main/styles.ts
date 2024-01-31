import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;

    & > section {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        max-width: 800px;
        margin: 2rem auto;
    }

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & img {
        width: 10rem;
    }

    & p {
        font-family: 'Frijole', system-ui;
        color: ${({ theme }) => theme.second};
        text-align: center;
        font-size: 2rem;
    }
`