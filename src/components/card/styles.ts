import styled from "styled-components";

export const CardContainer = styled.button`
    height: 10rem;
    width: 8rem;
    padding: 1.8rem 0.5rem;
    background: linear-gradient(to top, ${({ theme }) => theme.text}, ${({ theme }) => theme.primary});
    border-radius: 5px;
    border: none;
    cursor: pointer;

    & img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    }
`;