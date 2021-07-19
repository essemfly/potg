import { Grid } from '@material-ui/core';
import { sampleCardInfos } from '../Models/Mockdata';
import CardMainView from '../Pages/Card/CardMainView';
import CardDetailView from '../Pages/Card/CardDetailView';

const CardInfoDetailPage = (): JSX.Element => {
  const cardInfo = sampleCardInfos[0]
  return (
    <Grid container justifyContent="center">
      <Grid item xs={8}>
        <CardMainView cardInfo={cardInfo} />
      </Grid>
      <Grid item xs={4}>
        <CardDetailView cardInfo={cardInfo} />
      </Grid>
    </Grid>
  );
};

export default CardInfoDetailPage;
