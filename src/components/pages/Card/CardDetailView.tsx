import { CardInfo, GameType, CardClass } from '../../Card/Card';
import PlayerAvatar from '../../Creater/PlayerAvatar';

interface CardInfoProps {
  cardInfo: CardInfo;
}

const CardDetailView: React.FC<CardInfoProps> = ({ cardInfo }): JSX.Element => {
  return (
    <div>
      <p>Game: {GameType[cardInfo.gameType]}</p>
      <p>Type: {CardClass[cardInfo.cardClass]}</p>
      <PlayerAvatar player={cardInfo.player} />
      <p id="simple-modal-description">{cardInfo.description}</p>
    </div>
  );
};

export default CardDetailView;
