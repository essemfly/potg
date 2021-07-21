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

const PlayerAvatar: React.FC<PlayerProps> = ({ player }) => {
  return (
    <CreaterDiv key={player.id}>
      <NameSpan>{player.name}</NameSpan>
      <AvatarComponent avatarUrl={player.avatarUrl} />
    </CreaterDiv>
  );
};

export default PlayerAvatar;
