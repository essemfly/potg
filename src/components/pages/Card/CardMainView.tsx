import styled from 'styled-components';
import { CardInfo } from "../../Card/Card"


interface CardInfoProps {
    cardInfo: CardInfo
}

const CardImg = styled.img`
    width: 100px;
    height: auto;
    margin: 0 15px;
`

const CardMainView: React.FC<CardInfoProps> = ({ cardInfo }): JSX.Element => {
    return <div>
        <div>
            <video width="100%" height="450" controls autoPlay>
                <source src={cardInfo.videoUrl} type="video/mp4" />
                <track kind="captions" srcLang="kr" label="caption" default />
            </video>
        </div>
        <div>
            {cardInfo.images.map(function drawImage(imgSrc) {
                return <CardImg key={imgSrc} src={imgSrc} />
            })}
        </div>
    </div>
}

export default CardMainView