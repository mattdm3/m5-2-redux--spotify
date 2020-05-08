import { createStore } from "redux"
import reducer from "./reducers"

export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}


// What state will look like:

// {
//     auth: {
//       token: 'abc123',
//       status: 'idle',
//     },
//     artists: {
//       currentArtist: /* Data from Spotify API */,
//       status: 'idle',
//     }
//   }

