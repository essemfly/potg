import styled from 'styled-components';
import { Container } from '@material-ui/core';

const FooterDiv = styled.div`
    background-color: #212127;
    width: 100%;
    height: 60px;
`

const FooterTextDiv = styled.div`
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    color: white;
    line-height: 60px;
`

const Footer = (): JSX.Element => {
    return <FooterDiv>
        <Container>
            <FooterTextDiv>2021. LessButter inc.</FooterTextDiv>
        </Container>
    </FooterDiv>
}

export default Footer