import { CardInfo, GameType, CardClass} from "../../Models/Types"
import Creater from "../../Components/Creater"

interface CardInfoProps {
    cardInfo: CardInfo
}

const CardDetailView: React.FC<CardInfoProps> = ({ cardInfo }): JSX.Element => {
    return <div>
        <p>Game: {GameType[cardInfo.gameType]}</p>
        <p>Type: {CardClass[cardInfo.cardClass]}</p>
        <Creater creater={cardInfo.creater} />
        <p id="simple-modal-description">
            {cardInfo.description}
        </p>
    </div>
}

export default CardDetailView