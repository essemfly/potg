import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Pack } from '../../Models/Card';

import AvatarComponent from '../../Components/Avatar';

interface PackInfoProps {
  pack: Pack;
}

const CreaterDiv = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const PackDescriptionPart: React.FC<PackInfoProps> = ({
  pack,
}): JSX.Element => {
  const history = useHistory();
  const handleBuyClick: React.MouseEventHandler = () => {
    history.push('/opening');
  };

  return (
    <div>
      <div>
        <h2>{pack.name}</h2>
        가격: {pack.price}
      </div>
      <br />
      <div>
        <Button variant="outlined" color="primary" onClick={handleBuyClick}>
          구매하기
        </Button>
      </div>
      <br />
      <pre>{pack.description}</pre>
      <h3>Creaters</h3>
      <div>
        {pack.creaters.map(function avatarCreator(creater) {
          return (
            <CreaterDiv key={creater.id}>
              <p>{creater.name}</p>
              <AvatarComponent avatarUrl={creater.avatarUrl} />
            </CreaterDiv>
          );
        })}
      </div>
    </div>
  );
};

export default PackDescriptionPart;
