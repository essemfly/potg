import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

import { CardsState } from '../../../redux/cardsSlice';
import ClosedCard from '../../Card/ClosedCard';
import { CenterButton } from '../../../common/CenterButton';
import CardMainView from '../Card/CardMainView';
import CardDetailView from '../Card/CardDetailView';

interface CardsInPackProps {
  cardsInPack: CardsState;
  handleCardOpen: (idx: number) => void;
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
    width: '60%',
    backgroundColor: 'black',
    border: '2px solid #FFF',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const GotoMypageButtonDiv = styled.div`
  margin: 30px auto;
  text-align: center;
`;

const CardOpenView: React.FC<CardsInPackProps> = ({
  cardsInPack,
  handleCardOpen,
}): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  const openCard = (i: number) => {
    setCurrentCard(i);

    if (!cardsInPack.cardsOpenStatus[i]) {
      handleCardOpen(i);
      setTimeout(() => setOpen(true), 2500);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGoMyPage = () => {
    history.push('/mycards');
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <CardMainView cardInfo={cardsInPack.cards[currentCard].cardInfo} />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          <CardDetailView cardInfo={cardsInPack.cards[currentCard].cardInfo} />
        </Grid>
      </Grid>
    </div>
  );

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        {cardsInPack.cards.map(function createCard(card, i) {
          return (
            <ClosedCard
              key={card.id}
              card={card}
              packIndex={i}
              openCard={openCard}
            />
          );
        })}
      </Grid>
      <GotoMypageButtonDiv>
        <CenterButton
          variant="contained"
          color="primary"
          onClick={handleGoMyPage}
        >
          GO MYPAGE
        </CenterButton>
      </GotoMypageButtonDiv>
    </div>
  );
};

export default CardOpenView;
