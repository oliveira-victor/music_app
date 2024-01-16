import { useState } from "react"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import LoginForm from "../../Components/LoginForm"
import NewAccount from "../../Components/NewAccount"

import * as S from './styles'

import introImg from '../../assets/images/music-chars.png'

const Login = () => {

    const [createAccount, setCreateAccount] = useState(false)

    const toggleForms = () => {
        setCreateAccount(!createAccount)
    }

    return (
        <S.LoginContainer>
            <Header />
            <S.Main>
                {!createAccount ? (
                    <S.Container>
                    <S.Img>
                        <img src={introImg} alt="Music lovers image" />
                    </S.Img>
                    <S.FormContainer>
                        <LoginForm linkAction={toggleForms} />
                    </S.FormContainer>
                </S.Container>
                ) : (
                    <NewAccount linkAction={toggleForms} />
                )}
            </S.Main>
            <Footer />
        </S.LoginContainer>
    )
}

export default Login