import React, { useState } from 'react';

import { samplePack, sampleCards } from '../Models/Mockdata';
import PackOpenPage from '../Pages/Opening/PackOpenPage';
import CardOpenPage from '../Pages/Opening/CardOpenPage';

const PakOpeningPage = (): JSX.Element => {
  const [isOpenCard, setIsOpenCard] = useState(false);

  const handleCardOpen: React.MouseEventHandler = () => {
    setIsOpenCard(true);
  };

  return (
    <div>
      {isOpenCard === false ? (
        <PackOpenPage
          pack={samplePack}
          handleCardOpen={handleCardOpen}
        />
      ) : (
        <CardOpenPage cards={sampleCards}/>
      )}
    </div>
  );
};

export default PakOpeningPage;
