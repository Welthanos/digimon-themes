import { CardGroupContainer } from "./styles";

interface CardGroupProps {
    children: React.ReactNode;
}

export default function CardGroup({ children }: CardGroupProps) {
    return (
        <CardGroupContainer>{children}</CardGroupContainer>
    );
}