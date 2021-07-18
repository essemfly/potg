import { Grid } from '@material-ui/core';
import React, { useState } from 'react';

import { samplePack } from '../Models/Mockdata';
import BeforeOpeningPage from '../Pages/Opening/BeforeOpeningPage';
import AfterOpeningPage from '../Pages/Opening/AfterOpeningPage';

const PakOpeningPage = (): JSX.Element => {
  const [isOpenCard, setIsOpenCard] = useState(false);

  const handleCardOpen: React.MouseEventHandler = () => {
    setIsOpenCard(true);
  };

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {isOpenCard === false ? (
          <BeforeOpeningPage
            pack={samplePack}
            handleCardOpen={handleCardOpen}
          />
        ) : (
          <AfterOpeningPage />
        )}
      </Grid>
    </div>
  );
};

export default PakOpeningPage;
