import { Grid } from '@material-ui/core';
import BriefCard from '../Components/BriefCard';
import { sampleCards } from '../Models/Mockdata';

const MyCardsPage = (): JSX.Element => {
  return (
    <Grid container>
      <div>
        <h2>My Cards Page</h2>
      </div>
      <Grid container xs={12} justifyContent="center" alignItems="flex-start" spacing={4}>
        {sampleCards.map(function createCard(card) {
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
