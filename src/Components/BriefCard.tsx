import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { CardInfo, CardClass, GameType } from "../Models/Card"


interface CardProps {
    cardInfo: CardInfo
}

const StyledDiv = styled.div`
    border: 1px dashed white;
    text-align: center;
    cursor: pointer;
`

const BriefCard: React.FC<CardProps> = ({ cardInfo }): JSX.Element => {
    const history = useHistory();
    const handleCardClick: React.MouseEventHandler = () => {
        history.push('/cards')
    }

    return <Grid item xs={4}>
        <StyledDiv onClick={handleCardClick}>
            <h3>{cardInfo.name}</h3>
            <div>
                <p>Game: {GameType[cardInfo.gameType]}</p>
                <p>Type: {CardClass[cardInfo.cardClass]}</p>
            </div>
            <div>
                <img src={cardInfo.images[0]} alt="" />
            </div>
            <p>{cardInfo.description}</p>
        </StyledDiv>

    </Grid>
}

export default BriefCard