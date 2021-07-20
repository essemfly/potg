import styled from 'styled-components';
import { Creater } from './Creater';
import AvatarComponent from '../../common/Avatar';


const CreaterDiv = styled.div`
    display: inline-block;
    margin-right: 20px;
`;

interface CreaterProps {
    creater: Creater;
}

const CreaterAvatar: React.FC<CreaterProps> = ({ creater }) => {
    return <CreaterDiv key={creater.id}>
        <p>{creater.name}</p>
        <AvatarComponent avatarUrl={creater.avatarUrl} />
    </CreaterDiv>
}

export default CreaterAvatar