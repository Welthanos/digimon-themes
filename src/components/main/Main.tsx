import digimonOneImg from '../../assets/image 50.svg'
import { Button, ButtonContainer } from '../button/styles'
import Card from '../card/Card'
import CardGroup from '../cards/CardGroup'
import { MainContainer } from './styles'

import agumon from "../../assets/agumon.png";

export function Main(): JSX.Element {
    return (
        <MainContainer>
            <section className="image-container">
                <div>
                    <img src={digimonOneImg} alt="Imagem Digimon" />
                    <p>Digimon</p>
                </div>

                <ButtonContainer>
                    <Button color='#1D3C43' bgColor='#ABC8C6'>LIGHT THEME</Button>
                    <Button color='#FFFFFF' bgColor='#1D3C43'>DARK THEME</Button>
                </ButtonContainer>
            </section>

            <section className='cards-container'>
                <CardGroup>
                    <Card src={agumon} />
                    <Card src={agumon} />
                    <Card src={agumon} />
                    <Card src={agumon} />
                    <Card src={agumon} />
                    <Card src={agumon} />
                    <Card src={agumon} />
                    <Card src={agumon} />
                    <Card src={agumon} />
                    <Card src={agumon} />
                </CardGroup>
            </section>
        </MainContainer>
    )
}