import styled from 'styled-components';
import Moment from 'react-moment';
import { CardInfo, CardClass } from '../../Card/Card';
import PlayerAvatar from '../../Creater/PlayerAvatar';

interface CardInfoProps {
  cardInfo: CardInfo;
}

const CardDescriptionDiv = styled.div`
  position: relative;
  text-align: left;
  line-height: 1.5rem;
  margin: 5vh;
`;

const TimeDiv = styled.div`
  position: absolute;
  top: 5px;
  left: -16px;
  padding-left: 8px;
  white-space: nowrap;
  border-left: 1px solid white;
  transform: rotate(180deg) translate(30px, 0px);
  -webkit-writing-mode: vertical-rl;
`;

const CardDetailView: React.FC<CardInfoProps> = ({ cardInfo }): JSX.Element => {
  return (
    <div>
      <CardDescriptionDiv>
        <h1>{cardInfo.name}</h1>
        <TimeDiv>
          <Moment
            format="YYYY-MM-DD"
            style={{ fontSize: '1rem', float: 'left' }}
          >
            {cardInfo.livedAt}
          </Moment>
        </TimeDiv>
        <div style={{ display: 'grid' }}>
          <h2>
            <PlayerAvatar player={cardInfo.player} />
          </h2>
        </div>
        <h3>
          {CardClass[cardInfo.cardClass]}
          #/{cardInfo.distribution.total}
        </h3>
        <br />
        <hr />
        <h2>Description</h2>
        <p style={{ lineHeight: '2rem', fontSize: '1.2rem' }}>
          {cardInfo.description}
        </p>
      </CardDescriptionDiv>
    </div>
  );
};

export default CardDetailView;
