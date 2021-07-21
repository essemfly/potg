import { Grid } from '@material-ui/core';
import styled from 'styled-components';

import React, { useState } from 'react';
import { Card, CardClass, GameType } from './Card';
import CardBackDesign from './cardBackDesign.jpeg';
import PlayerAvatarReverse from '../Creater/PlayerAvatarReverse';

interface CardProp {
  card: Card;
  openCard: (i: number) => void;
  packIndex: number;
}

const CardOverallDiv = styled.div`
  width: 247px;
  height: 350px;
  margin: 10vh auto;
`;

const InnerCardDiv = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 3s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
`;

const FrontCardDiv = styled.div`
  background: url(${CardBackDesign});
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackCardDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.2);
  background-color: var(--light);
  transform: rotateY(180deg);
`;

const CardHeaderDiv = styled.div<{ imageUrl: string }>`
  position: relative;
  padding: 10px 10px 10px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    border-radius: 0 0 50% 0;
    background-image: linear-gradient(
      to bottom left,
      var(--primary) 10%,
      var(--secondary) 115%
    );
  }
`;

const ClosedCard: React.FC<CardProp> = ({
  card,
  openCard,
  packIndex,
}): JSX.Element => {
  const [active, setActive] = useState(false);

  const handleCardClickEvent = () => {
    openCard(packIndex);
    setActive(true);
  };

  return (
    <Grid item xs={4} alignItems="center">
      <CardOverallDiv className={active ? 'card_changer' : ''}>
        <InnerCardDiv
          role="button"
          className={active ? 'is-flipped' : ''}
          tabIndex={0}
          onClick={handleCardClickEvent}
          onKeyDown={handleCardClickEvent}
        >
          <FrontCardDiv />
          <BackCardDiv>
            <div className="card__content">
              <CardHeaderDiv imageUrl={card.cardInfo.images[1]}>
                <PlayerAvatarReverse player={card.cardInfo.player} />
              </CardHeaderDiv>
              <div className="card__body">
                <h3>{card.cardInfo.name}</h3>
                <p>{card.cardInfo.description}</p>
              </div>
            </div>
          </BackCardDiv>
        </InnerCardDiv>
      </CardOverallDiv>
    </Grid>
  );
};

export default ClosedCard;
