import { Route, Switch } from 'react-router-dom'
import AllMeetUpsPage from './pages/AllMeetUps';
import NewMeetUpsPage from './pages/NewMeetUp';
import FavoritesPage from './pages/Favorites';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return(
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>

        <Route path="/new-meetup">
          <NewMeetUpsPage />
        </Route>

        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </div>);
}

export default App;
