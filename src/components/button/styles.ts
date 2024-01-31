import styled from "styled-components";

type BgColorProps = '#ABC8C6' | '#1D3C43';
type ColorProps = '#FFFFFF' | '#1D3C43' 

interface ButtonProps {
    children: React.ReactNode,
    bgColor: BgColorProps
    color: ColorProps
}

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
`

export const Button = styled.button<ButtonProps>`
    height: 60px;
    width: 20rem;
    font-size: 1.25rem;
    background-color: ${({ bgColor }) => bgColor};
    border-radius: 8px;
    border: none;
    color: ${(props) => props.color};
    font-weight: 700;
    cursor: pointer;
`