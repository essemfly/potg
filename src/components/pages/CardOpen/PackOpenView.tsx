import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Pack } from '../../Pack/Pack';

interface CardOpeningProps {
  handlePackOpen: React.MouseEventHandler;
  pack: Pack;
}

const PackImageDiv = styled.div<IProps>`
  ${({ active }) =>
    active &&
    `
    animation-duration: 1s;
    animation-name: transparenting;
    animation-direction: alternate;
    animation-iteration-count: 2;
    `}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 60%;
  color: white;
  background: #222;
  margin-right: auto;
  margin-left: auto;
  border-radius: 30px;
  &::after {
    position: absolute;
    content: '';
    top: -3px;
    left: -3px;
    z-index: -1;
    width: calc(100% + 6px);
    height: calc(100% + 6px);
    background: linear-gradient(
      60deg,
      hsl(224, 85%, 66%),
      hsl(269, 85%, 66%),
      hsl(314, 85%, 66%),
      hsl(359, 85%, 66%),
      hsl(44, 85%, 66%),
      hsl(89, 85%, 66%),
      hsl(134, 85%, 66%),
      hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 30px;
    animation: moveGradient 4s alternate infinite;
  }
`;

const PackImage = styled.img`
  width: 100%;
  height: auto;
  padding: 10px;
  display: block;
`;

interface IProps {
  active: boolean;
}

const BuyButtonDiv = styled.div`
  margin: 30px auto;
  text-align: center;
`;

const BuyButton = styled(Button)({
  margin: '0 auto',
});

const PackOpenView: React.FC<CardOpeningProps> = ({
  handlePackOpen,
  pack,
}): JSX.Element => {
  const [isActive, setActive] = useState(false);
  const handleCardOpenEvent = (event: React.MouseEvent) => {
    setActive(!isActive);
    setTimeout(() => handlePackOpen(event), 2000);
  };
  return (
    <div style={{ zIndex: 1 }}>
      <h1 style={{ textAlign: 'center', margin: 0, padding: "30px 0", }}>{pack.name}</h1>
      <br />
      <PackImageDiv active={isActive}>
        <PackImage src={pack.imageUrl} />
      </PackImageDiv>
      <BuyButtonDiv>
        <BuyButton
          variant="outlined"
          color="primary"
          onClick={handleCardOpenEvent}
        >
          팩 열어보기
        </BuyButton>
      </BuyButtonDiv>
    </div>
  );
};

export default PackOpenView;
