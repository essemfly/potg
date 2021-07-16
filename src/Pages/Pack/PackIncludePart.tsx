import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import BriefCard from '../../Components/BriefCard';
import { CardInfo } from "../../Models/Card"


const CardInfosDiv = styled.div`
    margin-top: 30px;
`

interface PackInfoProps {
    cardInfos: CardInfo[];
}


const PackIncludePart: React.FC<PackInfoProps> = ({ cardInfos }): JSX.Element => {
    return <CardInfosDiv>
        <h2>포함된 카드들</h2>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
        >
            {cardInfos.map(function createCard(cardInfo) {
                return <BriefCard key={cardInfo.id} cardInfo={cardInfo} />
            })}
        </Grid>
    </CardInfosDiv>
}

export default PackIncludePart