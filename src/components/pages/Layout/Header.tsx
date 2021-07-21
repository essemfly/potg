import styled from 'styled-components';
import { Container } from '@material-ui/core';
import overwatchLogoImg from './overwatch-logo.png';

const NavDiv = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  background-color: #212127;
  width: 100%;
  height: 60px;
`;

const HeaderDiv = styled.div`
  font-family: overwatch;
  font-size: 2rem;
  display: inline-grid;
  -webkit-box-align: center;
  align-items: center;
  line-height: 60px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  display: inline-grid;
  height: 25px;
  margin-right: 10px;
  width: auto;
`;

const Header = (): JSX.Element => {
  const handleLogoClick: React.MouseEventHandler = () => {
    window.location.href = '/';
  };

  return (
    <NavDiv>
      <Container>
        <LogoImg src={overwatchLogoImg} alt="" />
        <HeaderDiv onClick={handleLogoClick}>POTG: Play of the Game</HeaderDiv>
      </Container>
    </NavDiv>
  );
};

export default Header;
