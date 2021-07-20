import styled from 'styled-components';
import { Creater } from './Creater';
import AvatarComponent from '../../common/Avatar';
import { NameSpan } from '../../common/NameSpan';


const CreaterDiv = styled.div`
    display: inline-block;
    margin-right: 20px;
`;

interface CreaterProps {
    creater: Creater;
}

const CreaterAvatar: React.FC<CreaterProps> = ({ creater }) => {
    return <CreaterDiv key={creater.id}>
        <NameSpan>{creater.name}</NameSpan>
        <AvatarComponent avatarUrl={creater.avatarUrl} />
    </CreaterDiv>
}

export default CreaterAvatar