// const SPOTIFY_ROOT = 'https://api.spotify.com/v1';


export function fetchArtistProfile(token, artistId) {
  const options = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const url = `https://api.spotify.com/v1/artists/${artistId}`;


  fetch(url, options)
    .then((response) => {
      return response.json()
    })

  // .then(json => dispatch(receiveAllArtistInfo(json)))


  // return fetch(url, options).then((response) => response.json());
}


// export function fetchArtistProfile(token, artistId) {
//   return fetchFromApi(token, `/artists/${artistId}`);
// }

// export function fetchRelatedArtists(token, artistId) {
//   return fetchFromApi(token, `/artists/${artistId}/related-artists`);
// }

// export function fetchTopTracks(token, artistId) {
//   return fetchFromApi(token, `/artists/${artistId}/top-tracks?country=US`);
// }

// export function fetchSearchResults(token, q, type = 'artist') {
//   return fetchFromApi(token, `/search?type=artist&q=${q}`);
// }



// export function fetchFromApi(token, endpoint) {
//   const options = {
//     headers: { Authorization: `Bearer ${token}` },
//   };

//   const url = SPOTIFY_ROOT + endpoint;

//   return fetch(url, options)
//     .then(checkStatus)
//     .then(response => response.json());
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   } else {
//     var error = new Error(response.statusText);
//     error.response = response;
//     throw error;
//   }
// }
