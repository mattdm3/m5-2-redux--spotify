

const initialState = {
    currentArtist: null,
    status: "idle"
}

export default function artistsReducer(state = initialState, action) {
    switch (action.type) {
        case "RECEIVE_ALL_ARTIST_INFO": {
            console.log("hello")
            return {
                ...state,
                status: "RECEIVED",
                currentArtist: {
                    profile: {
                        ...[action.response]
                    }
                }
            }

        }
        case "REQUEST_ARTIST_PROFILE": {
            return {
                ...state,
                status: "REQUESTING"
            }
        }
        case "RECEIVE_ALL_ARTIST_INFO_ERROR": {
            return {
                ...state,
                status: "error"
            }
        }

        default: {
            return state
        }
    }


}


// export const profileState = (state) => (state);

export const getArtist = state => state.artists;
// export const getArtistArray = state => Object.values(state.artists.currentArtist.profile);