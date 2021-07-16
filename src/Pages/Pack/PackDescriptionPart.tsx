import styled from 'styled-components';
import { Pack } from "../../Models/Card"
import AvatarComponent from "../../Components/Avatar";

interface PackInfoProps {
    pack: Pack;
}

const CreaterDiv = styled.div`
    display: inline-block;
    margin-right: 20px;
`

const PackDescriptionPart: React.FC<PackInfoProps> = ({ pack }): JSX.Element => {
    return <div>
        <div>
            <h2>{pack.name}</h2>
            가격: {pack.price}
        </div>
        <br />
        <pre>
            {pack.description}
        </pre>
        <h4>creaters</h4>
        <div>
            {pack.creaters.map(function avatarCreator(creater) {
                return <CreaterDiv key={creater.id}>
                    <p>{creater.name}</p>
                    <AvatarComponent avatarUrl={creater.avatarUrl} />
                </CreaterDiv>
            })}
        </div>
    </div>
}

export default PackDescriptionPart