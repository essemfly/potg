import { useSelector, useDispatch } from 'react-redux';

import PackOpenPage from './PackOpenView';
import CardOpenPage from './CardOpenView';
import { RootState } from '../../../app/store';
import { openPack } from '../../../redux/cardsSlice'

const PakOpeningPage = (): JSX.Element => {
  const packs = useSelector((state: RootState) => state.pack)
  const cards = useSelector((state: RootState) => state.cards)
  const dispatch = useDispatch()

  return (
    <div>
      {cards.status === "CLOSED" ? (
        <PackOpenPage
          pack={packs[0]}
          handleCardOpen={() => dispatch(openPack())}
        />
      ) : (
        <CardOpenPage cards={cards.cards} />
      )}
    </div>
  );
};

export default PakOpeningPage;
