import styled from 'styled-components';
import { Player } from './Creater';
import AvatarComponent from '../../common/Avatar';
import { NameSpan } from '../../common/NameSpan';

const CreaterDiv = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

interface PlayerProps {
  player: Player;
}

const PlayerAvatarReverse: React.FC<PlayerProps> = ({ player }) => {
  return (
    <CreaterDiv key={player.id}>
      <AvatarComponent avatarUrl={player.avatarUrl} />
      <NameSpan
        style={{
          marginLeft: '2vh',
          fontSize: '2rem',
          letterSpacing: '0.2rem',
        }}
      >
        {player.name}
      </NameSpan>
    </CreaterDiv>
  );
};

export default PlayerAvatarReverse;
