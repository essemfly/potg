import { Grid } from '@material-ui/core';

import { samplePack } from '../Models/Mockdata';
import PackIncludeView from '../Pages/Pack/PackIncludeView';
import PackImageView from '../Pages/Pack/PackImageVIew';
import PackDescriptionView from '../Pages/Pack/PackDescriptionVIew';

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
