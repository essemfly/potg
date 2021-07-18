import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Pack } from '../../Models/Card';

interface CardOpeningProps {
  handleCardOpen: React.MouseEventHandler;
  pack: Pack;
}

const PackImage = styled.img`
  width: 60%;
  height: auto;
  display: block;
`;

const BeforeOpeningPage: React.FC<CardOpeningProps> = ({
  handleCardOpen,
  pack,
}): JSX.Element => {
  return (
    <div>
      <h3>{pack.name}</h3>
      <PackImage src={pack.imageUrl} />
      <Button variant="outlined" color="primary" onClick={handleCardOpen}>
        팩 열어보기
      </Button>
    </div>
  );
};

export default BeforeOpeningPage;
