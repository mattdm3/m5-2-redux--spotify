import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchArtistProfile } from '../../helpers/api.helpers';
import { receiveAllArtistInfo, requestAllArtistInfo, receiveAllArtistInfoError } from '../../actions'
import { getArtistArray, getArtist } from '../../reducers/artists-reducer'
import ClipLoader from 'react-spinners/ClipLoader'



const ArtistRoute = () => {
    const dispatch = useDispatch();
    const accessToken = useSelector((state) => state.auth.token);
    const { artistId } = useParams();
    let artistName = "";
    let artistFollowers;
    let artistGenresArray;
    let artistImagesArray;

    const state = useSelector(getArtist)

    if (state.status === "RECEIVED") {
        artistName = state.currentArtist.profile[0].name;
        artistFollowers = state.currentArtist.profile[0].followers.total;
        artistGenresArray = state.currentArtist.profile[0].genres;
        artistImagesArray = state.currentArtist.profile[0].images;

    }

    const handleFollowers = (num) => {
        if (num.length === 4) {
            return (num[0] + "k")
        } else if (num.length === 5) {
            return (num[0] + num[1] + "k")
        } else if (num.length === 6) {
            return (num[0] + num[1] + num[2] + "k")
        }

    }




    // const actionInfo = useSelector(receiveAllArtistInfo)

    function fetchArtistProfile(token, artistId) {
        dispatch(requestAllArtistInfo())

        const options = {
            headers: { Authorization: `Bearer ${token}` },
        };

        const url = `https://api.spotify.com/v1/artists/${artistId}`;

        fetch(url, options)
            .then((response) => {
                return response.json()
            })
            .then(json => dispatch(receiveAllArtistInfo(json)))

            .catch(err => {
                console.log(err);
                dispatch(receiveAllArtistInfoError())

            })


        // return fetch(url, options).then((response) => response.json());
    }

    // THIS GETS THE ACCESS TOKEN, IF SUCCESSFUL IT FETCHES ARTIST 
    React.useEffect(() => {
        if (!accessToken) {
            return;
        }

        fetchArtistProfile(accessToken, artistId)

    }, [accessToken, artistId])





    return (

        (state.status !== "RECEIVED")
            ?
            (
                <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center" }}>
                    <ClipLoader
                        color={"#FF4FD8"}
                        size={60}
                    />
                    <p>If it's not loading, try <span style={{ color: "#FF4FD8", textDecoration: "underline", cursor: "pointer" }} onClick={() => window.location.reload()}>refreshing</span>  the page. </p>
                </div>
            )
            :
            (
                <StyledContainer>
                    <AvatarContainer>
                        <img src={artistImagesArray[1].url} />
                        <h1>{artistName}</h1>
                        <p><span>{handleFollowers((artistFollowers).toString())} </span>Followers</p>
                    </AvatarContainer>


                    <TagContainer>
                        <h2>tags</h2>
                        <Tags>
                            <button>{artistGenresArray[0]}</button>
                            <button>{artistGenresArray[1]}</button>

                        </Tags>

                    </TagContainer>



                </StyledContainer>

            )
    )

};

const StyledContainer = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-around;
    width: 375px; 
    height: 100%; 
    margin: 0 auto;
    margin-top: 50px; 
    text-align: center;
    align-items: center;
 

`

const AvatarContainer = styled.div`
    width: 268px; 
    height: 215px; 
    position: relative; 
    img {
        width: 175px; 
        border-radius: 50%; 
    }
    h1{
        position: absolute; 
        bottom: 5px; 
        font-weight: 700; 
        font-size: 1.8rem;
    }
    p {
        font-weight: 600; 
    }
    span {
        color: #FF4FD8; 
    }

`
const TagContainer = styled.div`
    width: 253px; 
    margin-top: 45px; 
    h2{
        font-weight: 600; 
    }
`

const Tags = styled.div`
    display: flex; 
    width: 100%; 
    justify-content: space-evenly;
    
    
    button {
        background: #4B4B4B;
        color: white; 
        font-size: .9rem; 
        font-weight: 600; 
        
        border: none;  
        border-radius: 5px; 
        padding: 8px 20px; 
        

    }
`

export default ArtistRoute;