import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 50%;
    height: 100px;
    font-size: 1.5rem;
    font-family: 'Frijole', system-ui;
    color: #ffffff;
    background-color: ${({ theme }) => theme.second};
    margin: -0.2rem auto;
    border-radius: 0 0 300px 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;