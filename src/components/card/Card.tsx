import { CardContainer } from "./styles";

interface CardProps {
    src: string;
}

export default function Card({ src }: CardProps) {
    return (
        <CardContainer>
            <img src={src} alt="Figura de um Digimon" />
        </CardContainer>
    );
}