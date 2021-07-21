import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import CardMainView from './CardMainView';
import CardDetailView from './CardDetailView';
import { RootState } from '../../../app/store';

interface MatchParams {
  cardInfoId: string;
}

const CardInfoDetailPage = ({
  match,
}: RouteComponentProps<MatchParams>): JSX.Element => {
  const { cardInfoId } = match.params;
  const cards = useSelector((state: RootState) => state.cards);
  const card = cards.cards.filter(
    (card) => card.cardInfo.id.toString() === cardInfoId,
  )[0];

  return (
    <Grid container justifyContent="center">
      <Grid item xs={5}>
        <CardMainView cardInfo={card.cardInfo} />
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={5}>
        <CardDetailView cardInfo={card.cardInfo} />
      </Grid>
    </Grid>
  );
};

export default CardInfoDetailPage;
