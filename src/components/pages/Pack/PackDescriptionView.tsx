import { useHistory } from 'react-router-dom';
import { Width100Button } from '../../../common/Width100Button';
import { Pack } from '../../Pack/Pack';
import CreaterAvatar from '../../Creater/CreaterAvatar';
import { PriceSpan } from '../../../common/PriceSpan';

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
        <h1>{pack.name}</h1>
        <PriceSpan> ₩ {pack.price} </PriceSpan>
      </div>
      <br />
      <div>
        <Width100Button variant="contained" color="primary" onClick={handleBuyClick}>
          JOIN DROP
        </Width100Button>
      </div>
      <br />
      <pre>{pack.description}</pre>
      <h3>Creaters</h3>
      <div>
        {pack.creaters.map(function avatarCreator(creater) {
          return (
            <CreaterAvatar key={creater.id} creater={creater} />
          );
        })}
      </div>
    </div>
  );
};

export default PackDescriptionView;
