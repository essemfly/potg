import styled from 'styled-components';
import { Container } from '@material-ui/core';

import Routes from './app/router';
import Header from './components/pages/Layout/Header';
import Footer from './components/pages/Layout/Footer';
// import bgImg from './Pages/overwatch-bg.jpg';

const AppDiv = styled.div`
  height: 100%;
`;

const BgDiv = styled.div`
  width: 100%;
  min-height: 100%;
  background-size: contain;
  z-index: -100;
`;

function App(): JSX.Element {
  return (
    <AppDiv>
      <Header />
      <BgDiv>
        <Container>
          <Routes />
        </Container>
      </BgDiv>
      <Footer />
    </AppDiv>
  );
}

export default App;
