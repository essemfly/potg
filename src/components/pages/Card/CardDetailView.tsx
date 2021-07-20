import { CardInfo, GameType, CardClass } from "../../Card/Card"
import CreaterAvatar from "../../Creater/CreaterAvatar"

interface CardInfoProps {
    cardInfo: CardInfo
}

const CardDetailView: React.FC<CardInfoProps> = ({ cardInfo }): JSX.Element => {
    return <div>
        <p>Game: {GameType[cardInfo.gameType]}</p>
        <p>Type: {CardClass[cardInfo.cardClass]}</p>
        <CreaterAvatar creater={cardInfo.creater} />
        <p id="simple-modal-description">
            {cardInfo.description}
        </p>
    </div>
}

export default CardDetailView