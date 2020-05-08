import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles'
import ArtistRoute from '../ArtistRoute'
import { useDispatch } from 'react-redux';

import {
  requestAccessToken,
  receiveAccessToken,
  receiveAccessTokenError,
} from '../../actions';


const DEFAULT_ARTIST_ID = '5wFXmYsg3KFJ8BDsQudJ4f'


const App = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(requestAccessToken());

    fetch("/spotify_access_token")
      .then(response => {
        return response.json();
      })
      .then((json) => {
        dispatch(receiveAccessToken(json.access_token));
      })

      .catch(err => {
        console.log(err);
        dispatch(receiveAccessTokenError());
      });


  }, [])

  return (
    <Router>


      <GlobalStyles />
      <Switch>
        {/* <Route path='/' >
          <ArtistRoute />
        </Route> */}
        <Route path='/artist/:artistId'>
          <ArtistRoute />
        </Route>
        <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} />


      </Switch>
    </Router>
  )
    ;
};

export default App;
