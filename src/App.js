import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Add from './pages/Add';
import Welcome from './pages/Welcome';
import Wishlist from './pages/Wishlist';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <main>
        <Header />
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/:id">
            <Wishlist />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
