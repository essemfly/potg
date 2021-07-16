import { Grid } from '@material-ui/core';

import { samplePack } from "../Models/Mockdata";
import PackIncludePart from "../Pages/Pack/PackIncludePart";
import PackImagePart from "../Pages/Pack/PackImagePart";
import PackDescriptionPart from "../Pages/Pack/PackDescriptionPart";


const PackInfoPage: React.FC = (): JSX.Element => {
  return <div>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item xs={8}>
        <PackImagePart imageUrl={samplePack.imageUrl.toString()} />
      </Grid>
      <Grid item xs={4}>
        <PackDescriptionPart pack={samplePack} />
      </Grid>
    </Grid>
    <PackIncludePart cardInfos={samplePack.cardInfos} />
  </div>;
};

export default PackInfoPage;
