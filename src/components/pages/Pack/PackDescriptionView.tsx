import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Pack } from '../../../Models/Types';

import Creater from '../../Creater/Creater';

interface PackInfoProps {
  pack: Pack;
}

const PackDescriptionView: React.FC<PackInfoProps> = ({
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
            <Creater key={creater.id} creater={creater} />
          );
        })}
      </div>
    </div>
  );
};

export default PackDescriptionView;
