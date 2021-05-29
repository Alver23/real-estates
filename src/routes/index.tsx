// Dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Pages
import HomePage from '@alversoft/pages/home';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
