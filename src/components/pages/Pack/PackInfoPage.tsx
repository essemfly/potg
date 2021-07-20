import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { RootState } from '../../../app/store';
import PackIncludeView from './PackIncludeView';
import PackImageView from './PackImageView';
import PackDescriptionView from './PackDescriptionView';


const PackInfoPage: React.FC = (): JSX.Element => {
  const packs = useSelector((state: RootState) => state.pack)
  const samplePack = packs[0]

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={8}>
          <PackImageView imageUrl={samplePack.imageUrl.toString()} />
        </Grid>
        <Grid item xs={4}>
          <PackDescriptionView pack={samplePack} />
        </Grid>
      </Grid>
      <h2>Cards Included</h2>
      <PackIncludeView cardInfos={samplePack.cardInfos} />
    </div>
  );
};

export default PackInfoPage;
