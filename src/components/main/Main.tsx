import { SetStateAction } from 'react'
import digimonOneImg from '../../assets/image 50.svg'
import { Button, ButtonContainer } from '../button/styles'
import { MainContainer } from './styles'

interface MainProps {
    changeTheme: (theme: SetStateAction<"light" | "dark">) => void
}

export function Main({ changeTheme }: MainProps): JSX.Element {
    return (
        <MainContainer>
            <section>
                <div>
                    <img src={digimonOneImg} alt="Imagem Digimon" />
                    <p>Digimon</p>
                </div>

                <ButtonContainer>
                    <Button
                        onClick={() => changeTheme('light')}
                        color='#1D3C43'
                        bgColor='#ABC8C6'
                    >
                        LIGHT THEME
                    </Button>
                    
                    <Button
                        onClick={() => changeTheme('dark')}
                        color='#FFFFFF'
                        bgColor='#1D3C43'
                    >
                        DARK THEME
                    </Button>
                </ButtonContainer>
            </section>
        </MainContainer>
    )
}