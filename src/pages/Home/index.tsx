import Header from "../../Components/Header"

import * as S from './styles'

const Home = () => {

    return (
        <>
            <Header />
            <S.HomeContainer className="container">
                <h2>Welcome, user!</h2>
            </S.HomeContainer>
        </>
    )
}

export default Home