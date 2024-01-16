import { useEffect, useState } from "react";
import Header from "../../Components/Header"

import * as S from './styles'

const Home = () => {

    // TEST INIT

    const [artists, setArtists] = useState([]);
    const [selectedArtist, setSelectedArtist] = useState(null);

    useEffect(() => {
        // Fetch the list of artists
        fetch('https://europe-west1-madesimplegroup-151616.cloudfunctions.net/artists-api-controller')
            .then(response => response.json())
            .then(data => setArtists(data))
            .catch(error => console.error('Error fetching artists:', error));
    }, []);

    const handleArtistClick = (artistId: any) => {
        // Fetch data for the selected artist
        fetch(`https://europe-west1-madesimplegroup-151616.cloudfunctions.net/artists-api-controller?artist_id=${artistId}`)
            .then(response => response.json())
            .then(data => setSelectedArtist(data))
            .catch(error => console.error('Error fetching artist data:', error));
    };

    // TEST END

    return (
        <>
            <Header />
            <S.HomeContainer className="container">
                <h2>Welcome, user!</h2>


                <div>
                    <h1>Artist List</h1>
                    <ul>
                        {artists.map(artist => (
                            <li key={artist.id} onClick={() => handleArtistClick(artist.id)}>
                                {artist.name}
                            </li>
                        ))}
                    </ul>

                    {selectedArtist && (
                        <div>
                            <h2>{selectedArtist.name}</h2>
                            <p>Genre: {selectedArtist.genre}</p>
                            <p>Country: {selectedArtist.country}</p>
                            {/* Add more details as needed */}
                        </div>
                    )}
                </div>


            </S.HomeContainer>
        </>
    )
}

export default Home