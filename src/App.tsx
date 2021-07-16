import styled from 'styled-components';
import { Container } from '@material-ui/core';

import Routes from './Routes/router';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import bgImg from "./Components/overwatch-bg.jpg"


const AppDiv = styled.div`
height: 100%;`


const BgDiv = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: url(${bgImg}), linear-gradient(black, black);
  background-size: contain;
`

function App(): JSX.Element {
  return <AppDiv>
    <Header />
    <BgDiv>
      <Container>
      <Routes />
      </Container>
    </BgDiv>
    <Footer />
  </AppDiv>;
}

export default App;
