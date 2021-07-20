import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import React, { useState } from 'react';
import { Card, CardClass, GameType } from './Card';
import CreaterAvatar from '../Creater/CreaterAvatar';

interface CardProp {
    card: Card
    openCard: (i: number) => void
    packIndex: number
}

const SceneDiv = styled.div`
    width: 100%;
    min-height: 400px;
    margin: 80px 0;
    perspective: 800px;
`

const CubeDiv = styled.div`
    width: 300px;
    height: 300px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotate3d() translateZ(-100px);
    transition: transform 2s;
`

const CubeFaceImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
`


const ClosedCard: React.FC<CardProp> = ({ card, openCard, packIndex }): JSX.Element => {
    const [active, setActive] = useState(false);

    const handleCardClickEvent = () => {
        openCard(packIndex)
        setActive(true)
    }

    return <Grid item xs={4}>
        <SceneDiv>
            <CubeDiv role="button" tabIndex={0} className={active ? "show-right" : ""} onClick={handleCardClickEvent} onKeyDown={handleCardClickEvent}>
                <div className="cube__face cube__face--front">
                    <CubeFaceImg src={card.cardInfo.images[0]} alt="" />
                </div>
                <div className="cube__face cube__face--top">
                    <CubeFaceImg src={card.cardInfo.images[1]} alt="" />
                </div>
                <div className="cube__face cube__face--right">
                    <CubeFaceImg src={card.cardInfo.images[2]} alt="" />
                </div>
                <div className="cube__face cube__face--back">
                    <CubeFaceImg src={card.cardInfo.images[0]} alt="" />
                </div>
                <div className="cube__face cube__face--bottom">
                    <CubeFaceImg src={card.cardInfo.images[1]} alt="" />
                </div>
                <div className="cube__face cube__face--left">
                    <CubeFaceImg src={card.cardInfo.images[2]} alt="" />
                </div>
            </CubeDiv>
        </SceneDiv>
        <div>
            No. {card.cardIndex}
        </div>
        <div>
            <p>Name: {card.cardInfo.name}</p>
            <CreaterAvatar creater={card.cardInfo.creater} />
            <p>Description: {card.cardInfo.description} </p>
            <p>Game: {GameType[card.cardInfo.gameType]}</p>
            <p>Type: {CardClass[card.cardInfo.cardClass]}</p>
        </div>
    </Grid>
}

export default ClosedCard