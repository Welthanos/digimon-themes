import { SetStateAction, useState } from 'react'
import { Button, ButtonContainer } from '../button/styles'
import Card from '../card/Card'
import CardGroup from '../cards/CardGroup'
import { MainContainer } from './styles'

import digimons from "../digimons/digimons";

interface MainProps {
    changeTheme: (theme: SetStateAction<"light" | "dark">) => void;
    theme: "light" | "dark";
}

export function Main({ changeTheme, theme }: MainProps): JSX.Element {
    const [digimon, setDigimon] = useState(digimons[0].image);

    const changeToDark = () => {
        if (theme === 'dark') return;

        const newDigimon = `${digimon.split('.')[0]}-black.png`;
        changeTheme('dark');
        setDigimon(newDigimon);

        console.log(newDigimon);
    }

    const changeToLight = () => {
        if (theme === 'light') return;

        const newDigimon = `${digimon.substring(0, digimon.length - 10)}.png`;
        changeTheme('light');
        setDigimon(newDigimon);
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
                    {digimons.filter(d => {
                        if (theme === 'dark') return d.name.includes("black");
                        return !d.name.includes("black");
                    }).map((d) => (
                        <Card key={d.name} changeDigimon={() => setDigimon(d.image)} src={d.image} />
                    ))}
                </CardGroup>
            </section>
        </MainContainer>
    )
}
