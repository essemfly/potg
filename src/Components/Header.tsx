import styled from 'styled-components';
import { Container } from '@material-ui/core';

const NavDiv = styled.div`
    position: sticky;
    top: 0;
    right: 0;
    left: 0;
    background-color: #212127;
    width: 100%;
    height: 60px;
`

const HeaderDiv = styled.div`
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    line-height: 60px;
`

const Header = (): JSX.Element => {
    return <NavDiv>
        <Container>
            <HeaderDiv>POTG: Play of the Game</HeaderDiv>
        </Container>
    </NavDiv>
}

export default Header