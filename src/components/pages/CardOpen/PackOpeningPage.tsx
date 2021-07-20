import React, { useState } from 'react';

import { samplePack, sampleCards } from '../../../Models/Mockdata';
import PackOpenPage from './PackOpenView';
import CardOpenPage from './CardOpenView';

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
