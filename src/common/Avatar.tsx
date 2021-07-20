import styled from 'styled-components';

const AvatarImage = styled.img`
    width: 50px;
    height: 50px;
`

interface AvatarProps {
    avatarUrl: string;
}

const AvatarComponent: React.FC<AvatarProps> = ({ avatarUrl }): JSX.Element => {
    return <AvatarImage src={avatarUrl} />
}

export default AvatarComponent