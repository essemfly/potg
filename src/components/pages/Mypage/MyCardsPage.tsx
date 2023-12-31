import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import BriefCard from '../../Card/BriefCard';
import { RootState } from '../../../app/store';

const MyCardsPage = (): JSX.Element => {
  const cards = useSelector((state: RootState) => state.cards.cards)
  return (
    <Grid container>
      <div>
        <h2>My Cards Page</h2>
      </div>
      <Grid container xs={12} justifyContent="center" alignItems="flex-start" spacing={4}>
        {cards.map(function createCard(card) {
          return (
            <Grid item key={card.id} xs={4}>
              <BriefCard cardInfo={card.cardInfo} />
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
};

export default MyCardsPage;
