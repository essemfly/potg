import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import CardInfoDetailPage from '../components/pages/Card/CardInfoDetailPage';
import MyCardsPage from '../components/pages/Mypage/MyCardsPage';
import PackInfoPage from '../components/pages/Pack/PackInfoPage';
import PackOpeningPage from '../components/pages/CardOpen/PackOpeningPage';
import ScrollToTop from './scrollToTop';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
