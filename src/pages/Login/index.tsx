import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import { LinkStyle } from "../../styles"

import * as S from './styles'

import introImg from '../../assets/images/music-chars.png'
import eye from '../../assets/images/eye.svg'
import eyeOff from '../../assets/images/eyeOff.svg'
import { useState } from "react"

const Login = () => {

    const [type, setType] = useState('password')

    const toggleType = () => {
        type === 'password' ? setType('text') : setType('password')
    }

    return (
        <S.LoginContainer>
            <Header />
            <S.Main>
                <S.Container>
                    <S.Img>
                        <img src={introImg} alt="Music lovers image" />
                    </S.Img>
                    <S.FormContainer>
                        <S.LoginForm>
                            <h2>Log in</h2>
                            <label htmlFor="user">User name</label>
                            <input type="text" name="user" />
                            <label htmlFor="user">Password</label>
                            <input type={type} name="user" />
                            <img onClick={toggleType} src={type === 'text' ? eye : eyeOff} alt="Show or hide password icon" title='Show or hide password' />
                            <S.LoginBtn>Enter</S.LoginBtn>
                            <p>New user? <LinkStyle>Create a new account</LinkStyle></p>
                        </S.LoginForm>
                    </S.FormContainer>
                </S.Container>
            </S.Main>
            <Footer />
        </S.LoginContainer>
    )
}

export default Login