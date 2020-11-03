import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import WishListItem from './components/WishListItem';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/">
          <WishListItem title="Test" />
          <Button>
            <Link to="/add">+</Link>
          </Button>
        </Route>
        <Route exact path="/add">
          Replace me with page
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
