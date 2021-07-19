import { Grid } from '@material-ui/core';
import BriefCard from '../../Components/BriefCard';
import { CardInfo } from "../../Models/Card"

interface PackInfoProps {
    cardInfos: CardInfo[];
}

const PackIncludePart: React.FC<PackInfoProps> = ({ cardInfos }): JSX.Element => {
    return <Grid container item xs={12} spacing={5} justifyContent="center" alignItems="flex-start">
        {cardInfos.map(function createCard(cardInfo) {
            return (
                <BriefCard key={cardInfo.id} cardInfo={cardInfo} />
            )
        })}
    </Grid>
}

export default PackIncludePart