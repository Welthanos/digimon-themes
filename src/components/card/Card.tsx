import { CardContainer } from "./styles";

interface CardProps {
    changeDigimon: () => void,
    src: string;
}

export default function Card({ src, changeDigimon }: CardProps) {
    return (
        <CardContainer onClick={changeDigimon}>
            <img src={src} alt="Figura de um Digimon" />
        </CardContainer>
    );
}