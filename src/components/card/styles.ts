import styled from "styled-components";

export const CardContainer = styled.div`
    height: 10rem;
    width: 8rem;
    padding: 1rem 0.5rem;
    background: linear-gradient(to top, ${({ theme }) => theme.text}, ${({ theme }) => theme.primary});
    border-radius: 5px;

    & img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`;