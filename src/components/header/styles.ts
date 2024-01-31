import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 50%;
    height: 100px;
    font-family: 'Frijole', system-ui;
    color: #ffffff;
    background-color: ${({ theme }) => theme.second};
    margin: 0 auto;
    border-radius: 0 0 50% 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;