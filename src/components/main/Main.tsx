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
import metalgreymon from "../../assets/metalgreymon.png";



interface MainProps {
    changeTheme: (theme: SetStateAction<"light" | "dark">) => void;
    theme: "light" | "dark";
}

export function Main({ changeTheme, theme }: MainProps): JSX.Element {
    const [digimon, setDigimon] = useState(agumon);
    const [image, setImage] = useState(digimon.split('?')[0]);

    const selectDigimon = (image: string) => {
        setDigimon(image);
    }

    console.log(image);

    const changeToDark = () => {
        if (theme === 'dark') return;

        setImage(`${image.split(".")[0]}-black.png`);
        changeTheme('dark');
    }

    const changeToLight = () => {
        if (theme === 'light') return;

        setImage(`${image.substring(0, image.length - 10)}.png`);
        changeTheme('light');
    }

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
                    <Card chageDigimon={() => selectDigimon(agumon)} src={agumon} />
                    <Card chageDigimon={() => selectDigimon(guilmon)} src={guilmon} />
                    <Card chageDigimon={() => selectDigimon(gabumon)} src={gabumon} />
                    <Card chageDigimon={() => selectDigimon(patamon)} src={patamon} />
                    <Card chageDigimon={() => selectDigimon(veemon)} src={veemon} />
                    <Card chageDigimon={() => selectDigimon(gatomon)} src={gatomon} />
                    <Card chageDigimon={() => selectDigimon(growmon)} src={growmon} />
                    <Card chageDigimon={() => selectDigimon(metalgreymon)} src={metalgreymon} />
                    <Card chageDigimon={() => selectDigimon(garudamon)} src={garudamon} />
                    <Card chageDigimon={() => selectDigimon(agumon)} src={agumon} />
                </CardGroup>
            </section>
        </MainContainer>
    )
}