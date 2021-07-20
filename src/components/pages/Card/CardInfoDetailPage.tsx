import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import CardMainView from './CardMainView';
import CardDetailView from './CardDetailView';
import { RootState } from '../../../app/store';

const CardInfoDetailPage = (): JSX.Element => {
  const cards = useSelector((state: RootState) => state.cards)
  const [card,] = cards.cards

  return (
    <Grid container justifyContent="center">
      <Grid item xs={8}>
        <CardMainView cardInfo={card.cardInfo} />
      </Grid>
      <Grid item xs={4}>
        <CardDetailView cardInfo={card.cardInfo} />
      </Grid>
    </Grid>
  );
};

export default CardInfoDetailPage;
