import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import React from 'react';
import Moment from 'react-moment';
import { CardInfo, CardClass } from './Card';

interface CardProps {
  cardInfo: CardInfo;
}

const StyledDiv = styled.div`
  border-radius: 50px;
  cursor: pointer;
  text-align: center;
  padding-bottom: 50px;
`;

const CardImageDiv = styled.div`
  width: 300px;
  height: 300px;
  margin: 5% auto;
`;

const CardMainImg = styled.img`
  width: 100% !important;
  height: 100%;
`;

const CardBriefDescription = styled.div`
  text-align: left;
  line-height: 1.5rem;
  margin: 10px 5%;
`;

const BriefCard: React.FC<CardProps> = ({ cardInfo }): JSX.Element => {
  const history = useHistory();
  const handleCardClick: React.MouseEventHandler = () => {
    history.push(`/cards/${cardInfo.id.toString()}`);
  };

  return (
    <StyledDiv onClick={handleCardClick}>
      <CardImageDiv>
        <CardMainImg src={cardInfo.images[0]} alt="" />
      </CardImageDiv>

      <CardBriefDescription>
        <h3>{cardInfo.name}</h3>
        <h4>
          {cardInfo.player.name}
          <div style={{ float: 'right' }}>
            <span>{CardClass[cardInfo.cardClass]} </span>
            <span>#/{cardInfo.distribution.total}</span>
          </div>
        </h4>
        <div>
          <Moment format="YYYY-MM-DD" style={{ fontSize: '0.85rem' }}>
            {cardInfo.livedAt}
          </Moment>
        </div>

        <p>{cardInfo.description}</p>
      </CardBriefDescription>
    </StyledDiv>
  );
};

export default BriefCard;
