import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CardInfoDetailPage from './CardInfoDetailPage';
import MyCardsPage from './MyCardsPage';
import PackInfoPage from './PackInfoPage';
import PackOpeningPage from './PackOpeningPage';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PackInfoPage} />
        <Route path="/mycards" component={MyCardsPage} />
        <Route path="/cards" component={CardInfoDetailPage} />
        <Route path="/opening" component={PackOpeningPage} />
        {/* Not Found */}
        <Route component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
