import styled from 'styled-components';
import { Creater } from '../Models/Types';
import AvatarComponent from './Avatar';

const CreaterDiv = styled.div`
    display: inline-block;
    margin-right: 20px;
`;

interface CreaterProps {
    creater: Creater;
}

const CreateComponent: React.FC<CreaterProps> = ({ creater }) => {
    return <CreaterDiv key={creater.id}>
        <p>{creater.name}</p>
        <AvatarComponent avatarUrl={creater.avatarUrl} />
    </CreaterDiv>
}

export default CreateComponent