import styled from 'styled-components';

const AvatarImage = styled.img`
  width: 60px;
  height: 60px;
`;

interface AvatarProps {
  avatarUrl: string;
}

const AvatarComponent: React.FC<AvatarProps> = ({ avatarUrl }): JSX.Element => {
  return <AvatarImage src={avatarUrl} />;
};

export default AvatarComponent;
