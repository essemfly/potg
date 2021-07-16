import { Grid } from '@material-ui/core';
import { CardInfo, CardClass, GameType } from "../Models/Card"

interface CardProps {
    cardInfo: CardInfo
}

const BriefCard: React.FC<CardProps> = ({ cardInfo }): JSX.Element => {
    return <Grid item xs={4}>
        <h3>{cardInfo.name}</h3>
        <div>
            <p>Game: {GameType[cardInfo.gameType]}</p>
            <p>Type: {CardClass[cardInfo.cardClass]}</p>
        </div>
        <div>
            <video width="320" height="240" controls>
                <source src={cardInfo.videoUrl} type="video/mp4" />
                <track kind="captions" srcLang="kr" label="caption" default />
            </video>
        </div>
        <p>{cardInfo.description}</p>
        
    </Grid>
}

export default BriefCard