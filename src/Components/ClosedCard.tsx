import { Grid } from '@material-ui/core';

import React, { useState } from 'react';
import { Card, CardClass, GameType } from '../Models/Card';
import Creater from './Creater';
import P1Img from './p1.jpeg'
import P2Img from './p2.jpeg'
import P3Img from './p3.jpeg'

interface CardProp {
    card: Card
    openCard: (i: number) => void
    packIndex: number
}

const ClosedCard: React.FC<CardProp> = ({ card, openCard, packIndex }): JSX.Element => {
    const [active, setActive] = useState(false);

    const handleCardClickEvent = () => {
        openCard(packIndex)
        setActive(true)
    }

    return <Grid item xs={4}>
        <div className="scene">
            <div role="button" tabIndex={0} className={active ? "cube show-right" : "cube"} onClick={handleCardClickEvent} onKeyDown={handleCardClickEvent}>
                <div className="cube__face cube__face--front">
                    <img className="cube__side__img" src={P1Img} alt="" />
                </div>
                <div className="cube__face cube__face--back">
                    <img className="cube__side__img" src={P2Img} alt="" />
                </div>
                <div className="cube__face cube__face--right">
                    <img className="cube__side__img" src={P3Img} alt="" />
                </div>
                <div className="cube__face cube__face--left">
                    <img className="cube__side__img" src={P1Img} alt="" />
                </div>
                <div className="cube__face cube__face--top">
                    <img className="cube__side__img" src={P2Img} alt="" />
                </div>
                <div className="cube__face cube__face--bottom">
                    <img className="cube__side__img" src={P3Img} alt="" />
                </div>
            </div>
        </div>
        <div>
            No. {card.cardIndex}
        </div>
        <div>
            <p>Name: {card.cardInfo.name}</p>
            <Creater creater={card.cardInfo.creater} />
            <p>Description: {card.cardInfo.description} </p>
            <p>Game: {GameType[card.cardInfo.gameType]}</p>
            <p>Type: {CardClass[card.cardInfo.cardClass]}</p>

        </div>

    </Grid>
}

export default ClosedCard