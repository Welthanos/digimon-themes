import { CardContainer } from "./styles";

interface CardContainerProps {
    src: string;
}

export default function Card({ src }: CardContainerProps) {
    return (
        <CardContainer>
            <img src={src} alt="Figura de um Digimon" />
        </CardContainer>
    );
}