import styled from "styled-components";

export const MainContainer = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;

    .image-container {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        max-width: 1000px;
        margin: 2rem auto;
    }

    .image-container .div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cards-container {
        display: flex;
        margin: 3rem auto auto auto;
        max-width: 52rem;
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