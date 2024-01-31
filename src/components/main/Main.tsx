import digimonOneImg from '../../assets/image 50.svg'
import { Button, ButtonContainer } from '../button/styles'
import { MainContainer } from './styles'

export function Main(): JSX.Element {
    return (
        <MainContainer>
            <section>
                <div>
                    <img src={digimonOneImg} alt="Imagem Digimon" />
                    <p>Digimon</p>
                </div>

                <ButtonContainer>
                    <Button color='#1D3C43' bgColor='#ABC8C6'>LIGHT THEME</Button>
                    <Button color='#FFFFFF' bgColor='#1D3C43'>DARK THEME</Button>
                </ButtonContainer>
            </section>
        </MainContainer>
    )
}