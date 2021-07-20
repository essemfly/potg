import { Grid } from '@material-ui/core';
import BriefCard from '../../Card/BriefCard';
import { CardInfo } from "../../../Models/Types"

interface PackInfoProps {
    cardInfos: CardInfo[];
}

const PackIncludeView: React.FC<PackInfoProps> = ({ cardInfos }): JSX.Element => {
    return <Grid container item xs={12} spacing={4} justifyContent="center" alignItems="flex-start">
        {cardInfos.map(function createCard(cardInfo) {
            return (
                <Grid item xs={4} key={cardInfo.id} >
                    <BriefCard cardInfo={cardInfo} />
                </Grid>
            )
        })}
    </Grid>
}

export default PackIncludeView