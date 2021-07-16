import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CardDetailPage from './CardDetailPage';
import MyCardsPage from './MyCardsPage';
import PackInfoPage from './PackInfoPage';
import PackOpeningPage from './PackOpeningPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PackInfoPage} />
        <Route path="/mycards" component={MyCardsPage} />
        <Route path="/cards" component={CardDetailPage} />
        <Route path="/open" component={PackOpeningPage} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
