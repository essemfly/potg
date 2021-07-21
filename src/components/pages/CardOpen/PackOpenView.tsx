import React, { useState } from 'react';
import styled from 'styled-components';
import { Pack } from '../../Pack/Pack';
import { CenterButton } from '../../../common/CenterButton';

interface CardOpeningProps {
  handlePackOpen: React.MouseEventHandler;
  pack: Pack;
}

interface IProps {
  active: boolean;
  imageUrl: string;
}

const PackImageDiv = styled.div<IProps>`
  ${({ active }) =>
    active &&
    `
    animation-duration: 1.5s;
    animation-name: transparenting;
    animation-direction: alternate;
    animation-iteration-count: 2;
    `}
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  height: 500px;
  width: 500px;
  color: white;
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
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 30px;
    animation: moveGradient 4s alternate infinite;
  }
`;

const BuyButtonDiv = styled.div`
  margin: 30px auto;
  text-align: center;
`;

const PackOpenView: React.FC<CardOpeningProps> = ({
  handlePackOpen,
  pack,
}): JSX.Element => {
  const [isActive, setActive] = useState(false);
  const handleCardOpenEvent = (event: React.MouseEvent) => {
    setActive(!isActive);
    document.body.classList.toggle('body_changer');
    setTimeout(() => handlePackOpen(event), 2000);
  };
  return (
    <div style={{ zIndex: 1, marginTop: '5vh' }}>
      <h1 style={{ textAlign: 'center', margin: 0, padding: '30px 0' }}>
        {pack.name}
      </h1>
      <br />
      <PackImageDiv active={isActive} imageUrl={pack.imageUrl} />
      {isActive ? (
        ''
      ) : (
        <BuyButtonDiv>
          <CenterButton
            variant="contained"
            color="primary"
            onClick={handleCardOpenEvent}
          >
            OPEN PACKS
          </CenterButton>
        </BuyButtonDiv>
      )}
    </div>
  );
};

export default PackOpenView;
