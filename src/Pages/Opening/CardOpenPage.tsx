import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { Card } from '../../Models/Card';
import ClosedCard from '../../Components/ClosedCard';


interface CardsProps {
  cards: Card[]
}


const CardOpenPage: React.FC<CardsProps> = ({ cards }): JSX.Element => {
  const [cardsOpened, setCardsOpened] = useState(new Array(cards.length).fill(false));

  const openCard = (i: number) => {
    cardsOpened[i] = true
    setCardsOpened(cardsOpened)
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      {cards.map(function createCard(card, i) {
        return <ClosedCard key={card.id} card={card} packIndex={i} openCard={openCard} />
      })}
    </Grid>

  );
};

export default CardOpenPage;
