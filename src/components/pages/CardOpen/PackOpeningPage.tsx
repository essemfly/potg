import { useSelector, useDispatch } from 'react-redux';

import PackOpenPage from './PackOpenView';
import CardOpenPage from './CardOpenView';
import { RootState } from '../../../app/store';
import { openPack, openCard } from '../../../redux/cardsSlice'

const PakOpeningPage = (): JSX.Element => {
  const packs = useSelector((state: RootState) => state.pack)
  const cards = useSelector((state: RootState) => state.cards)
  const dispatch = useDispatch()

  return (
    <div>
      {cards.status === "CLOSED" ? (
        <PackOpenPage
          pack={packs[0]}
          handlePackOpen={() => dispatch(openPack())}
        />
      ) : (
        <CardOpenPage
          cardsInPack={cards}
          handleCardOpen={(i) => dispatch(openCard(i))}
        />
      )}
    </div>
  );
};

export default PakOpeningPage;
