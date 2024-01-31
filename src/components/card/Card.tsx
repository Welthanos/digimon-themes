import { CardContainer } from "./styles";

interface CardProps {
    chageDigimon: () => void,
    src: string;
}

export default function Card({ src, chageDigimon }: CardProps) {
    return (
        <CardContainer onClick={chageDigimon}>
            <img src={src} alt="Figura de um Digimon" />
        </CardContainer>
    );
}