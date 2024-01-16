import { useGetArtistsQuery } from '../../services/artistsApi'
import Header from "../../Components/Header"

import * as S from './styles'

const Home: React.FC = () => {

    const { data: artists, error, isLoading } = useGetArtistsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    /* if (error) {
        return <div>Error fetching artists: {error}</div>;
    } */


    return (
        <>
            <Header />
            <S.HomeContainer className="container">
                <h2>Welcome, user!</h2>

                <ul>
                    {artists?.map((artist) => (
                        <li key={artist.id}>{artist.name}</li>
                    ))}
                </ul>

            </S.HomeContainer>
        </>
    )
}

export default Home