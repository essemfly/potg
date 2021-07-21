import styled from 'styled-components';
import { CardInfo } from '../../Card/Card';

interface CardInfoProps {
  cardInfo: CardInfo;
}

const CardImg = styled.img`
  width: 100px;
  height: auto;
  margin: 0 15px;
`;

const CardMainDiv = styled.div`
  margin: 5vh;
`;

const CardVideoDiv = styled.div`
  width: 500px;
  height: 500px;
  margin: 1vh;
`;

const CardMainView: React.FC<CardInfoProps> = ({ cardInfo }): JSX.Element => {
  return (
    <CardMainDiv>
      <CardVideoDiv>
        <video width="100%" height="" controls autoPlay>
          <source src={cardInfo.videoUrl} type="video/mp4" />
          <track kind="captions" srcLang="kr" label="caption" default />
        </video>
      </CardVideoDiv>
      <div>
        {cardInfo.images.map(function drawImage(imgSrc) {
          return <CardImg key={imgSrc} src={imgSrc} />;
        })}
      </div>
    </CardMainDiv>
  );
};

export default CardMainView;
