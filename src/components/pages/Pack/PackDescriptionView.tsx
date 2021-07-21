import { useHistory } from 'react-router-dom';
import { Width100Button } from '../../../common/Width100Button';
import { Pack } from '../../Pack/Pack';
import PlayerAvatar from '../../Creater/PlayerAvatar';
import { PriceSpan } from '../../../common/PriceSpan';
import AvatarComponent from '../../../common/Avatar';

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
        <PriceSpan style={{ display: 'block' }}> ₩ {pack.price} </PriceSpan>
      </div>
      <br />
      <div>
        <Width100Button
          variant="contained"
          color="primary"
          onClick={handleBuyClick}
        >
          JOIN DROP
        </Width100Button>
      </div>
      <br />
      <AvatarComponent avatarUrl={pack.creaters[0].logoUrl} />
      <pre>{pack.description}</pre>
      <h3>Players</h3>
      <div>
        {pack.players.map(function avatarCreator(player) {
          return <PlayerAvatar key={player.id} player={player} />;
        })}
      </div>
    </div>
  );
};

export default PackDescriptionView;
