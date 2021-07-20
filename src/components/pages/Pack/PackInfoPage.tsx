import { Grid } from '@material-ui/core';

import { samplePack } from '../../../fixtures/Mockdata';
import PackIncludeView from './PackIncludeView';
import PackImageView from './PackImageView';
import PackDescriptionView from './PackDescriptionView';

const PackInfoPage: React.FC = (): JSX.Element => {
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
      <h2>포함된 카드들</h2>
        <PackIncludeView cardInfos={samplePack.cardInfos} />
    </div>
  );
};

export default PackInfoPage;
