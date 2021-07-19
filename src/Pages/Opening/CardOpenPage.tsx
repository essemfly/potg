import { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Card, GameType, CardClass } from '../../Models/Card';
import ClosedCard from '../../Components/ClosedCard';
import Creater from '../../Components/Creater';

interface CardsProps {
  cards: Card[]
}

function getModalStyle() {
  return {
    top: '10%',
    left: '25%',
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "50%",
    backgroundColor: "black",
    border: '2px solid #FFF',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CardOpenPage: React.FC<CardsProps> = ({ cards }): JSX.Element => {
  const [cardsOpened, setCardsOpened] = useState(new Array(cards.length).fill(false));
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const classes = useStyles()

  const openCard = (i: number) => {
    setCurrentCard(i)

    if (!cardsOpened[i]) {
      cardsOpened[i] = true
      setCardsOpened(cardsOpened)      
      setTimeout(() => setOpen(true), 2500);
    }
  }

  const handleClose = () => {
    setOpen(false)
  };


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{cards[currentCard].cardInfo.name}</h2>
      <Grid container justifyContent="center" spacing={5}>
        <Grid item xs={6}><video width="320" height="240" controls autoPlay>
          <source src={cards[currentCard].cardInfo.videoUrl} type="video/mp4" />
          <track kind="captions" srcLang="kr" label="caption" default />
        </video></Grid>
        <Grid item xs={6}>
          <p>
            Index: {cards[currentCard].cardIndex}
          </p>
          <p>Game: {GameType[cards[currentCard].cardInfo.gameType]}</p>
          <p>Type: {CardClass[cards[currentCard].cardInfo.cardClass]}</p>
          <Creater creater={cards[currentCard].cardInfo.creater} />
          <p id="simple-modal-description">
            {cards[currentCard].cardInfo.description}
          </p>
        </Grid>
      </Grid>
    </div>
  );

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      {cards.map(function createCard(card, i) {
        return <ClosedCard key={card.id} card={card} packIndex={i} openCard={openCard} />
      })}
    </Grid>
  );
};

export default CardOpenPage;
