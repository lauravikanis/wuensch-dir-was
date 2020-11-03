import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalStyle from './GlobalStyle';
import Add from './components/pages/Add';
import Welcome from './components/pages/Welcome';
import Wishlist from './components/pages/Wishlist';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <main>
        <Header />
        <Switch>
          <Route path="/Add">
            <Add />
          </Route>
          <Route path="/wishlist">
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
