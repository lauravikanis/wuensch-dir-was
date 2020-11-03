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
            <Link to="/wish">+</Link>
          </Button>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
