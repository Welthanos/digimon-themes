import { SetStateAction, useState } from 'react'
import { Button, ButtonContainer } from '../button/styles'
import Card from '../card/Card'
import CardGroup from '../cards/CardGroup'
import { MainContainer } from './styles'

import agumon from "../../assets/agumon.png";
import gabumon from "../../assets/gabumon.png";
import garudamon from "../../assets/garudamon.png";
import gatomon from "../../assets/gatomon.png";
import growmon from "../../assets/growmon.png";
import guilmon from "../../assets/guilmon.png";
import veemon from "../../assets/veemon.png";
import patamon from "../../assets/patamon.png";
import gaomon from "../../assets/gaomon.png";
import metalgreymon from "../../assets/metalgreymon.png";



interface MainProps {
    changeTheme: (theme: SetStateAction<"light" | "dark">) => void;
    theme: "light" | "dark";
}

export function Main({ changeTheme, theme }: MainProps): JSX.Element {
    const [digimon, setDigimon] = useState(agumon);

    const changeToDark = () => {
        if (theme === 'dark') return;

        const newImage = `${digimon.split('.')[0]}-black.png`;

        changeTheme('dark');

        setDigimon(newImage);
    }

    const changeToLight = () => {
        if (theme === 'light') return;

        const newImage = `${digimon.substring(0, digimon.length - 10)}.png`;

        changeTheme('light');

        setDigimon(newImage);
    }

    console.log(digimon);

    return (
        <MainContainer>
            <section className="image-container">
                <div>
                    <img src={digimon} alt="Imagem Digimon" />
                    <p>Digimon</p>
                </div>

                <ButtonContainer>
                    <Button
                        onClick={changeToLight}
                        color='#1D3C43'
                        bgcolor='#93CBC4'
                    >
                        LIGHT THEME
                    </Button>

                    <Button
                        onClick={changeToDark}
                        color='#FFFFFF'
                        bgcolor='#1D3C43'
                    >
                        DARK THEME
                    </Button>
                </ButtonContainer>
            </section>

            <section className='cards-container'>
                <CardGroup>
                    <Card changeDigimon={() => setDigimon(agumon)} src={agumon} />
                    <Card changeDigimon={() => setDigimon(guilmon)} src={guilmon} />
                    <Card changeDigimon={() => setDigimon(gabumon)} src={gabumon} />
                    <Card changeDigimon={() => setDigimon(patamon)} src={patamon} />
                    <Card changeDigimon={() => setDigimon(veemon)} src={veemon} />
                    <Card changeDigimon={() => setDigimon(gatomon)} src={gatomon} />
                    <Card changeDigimon={() => setDigimon(gaomon)} src={gaomon} />
                    <Card changeDigimon={() => setDigimon(growmon)} src={growmon} />
                    <Card changeDigimon={() => setDigimon(metalgreymon)} src={metalgreymon} />
                    <Card changeDigimon={() => setDigimon(garudamon)} src={garudamon} />
                </CardGroup>
            </section>
        </MainContainer>
    )
}
