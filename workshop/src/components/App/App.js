import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GlobalStyles from '../GlobalStyles'
import ArtistRoute from '../ArtistRoute'

const DEFAULT_ARTIST_ID = '5wFXmYsg3KFJ8BDsQudJ4f'

const App = () => {

  return (
    <Router>


      <GlobalStyles />
      <Switch>
        {/* <Route path='/' >
          <ArtistRoute />
        </Route> */}
        <Route path='/artists/:id'>
          <ArtistRoute />
        </Route>
        {/* <Redirect to={`/artist/${DEFAULT_ARTIST_ID}`} /> */}


      </Switch>
    </Router>
  )
    ;
};

export default App;
