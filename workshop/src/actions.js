
// ACCESS TOKEN 

export const requestAccessToken = () => ({
    type: "REQUEST_ACCESS_TOKEN",
})

export const receiveAccessToken = (token) => ({
    type: 'RECEIVE_ACCESS_TOKEN',
    token,
});

export const receiveAccessTokenError = () => ({
    type: 'RECEIVE_ACCESS_TOKEN_ERROR',
});

// ARTIST INFO

export const requestAllArtistInfo = () => ({
    type: 'REQUEST_ALL_ARTIST_INFO',
});

export const receiveAllArtistInfo = (json) => ({
    type: "RECEIVE_ALL_ARTIST_INFO",
    response: json,
})

export const receiveAllArtistInfoError = () => ({
    type: "RECEIVE_ALL_ARTIST_INFO_ERROR"
})