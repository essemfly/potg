import {
  Card,
  CardInfo,
  CardDistribution,
  CardClass,
  GameType,
  CardStatus,
} from '../components/Card/Card';
import { Pack } from '../components/Pack/Pack';
import { Creater, Player } from '../components/Creater/Creater';
import PackImg from './nyxlpack.png';
import Flora from './flora.png';
import Friday from './friday.png';
import NYXLLogo from './nyxl.svg';
import Image1 from './image1.png';
import Image2 from './image2.png';
import Image3 from './image3.png';
import POTGImage from './POTG.png';

const creater: Creater = {
  id: 39,
  name: 'NYXL',
  logoUrl: NYXLLogo,
  email: 'flora@nyxl.com',
  twitchUrl: 'flora@twitch.tv',
  avatarUrl: Flora,
};

const player1: Player = {
  id: 552,
  name: 'FLORA',
  email: 'flora@nyxl.com',
  twitchUrl: 'flora@twitch.tv',
  avatarUrl: Flora,
};

const player2: Player = {
  id: 889,
  name: 'Friday',
  email: 'friday@nyxl.com',
  twitchUrl: 'friday@twitch.tv',
  avatarUrl: Friday,
};

const videoUrls: string[] = [
  'https://potg-test-videos.s3.ap-northeast-2.amazonaws.com/nyxl/POTG_NYXL-Friday-1.mp4',
  'https://potg-test-videos.s3.ap-northeast-2.amazonaws.com/nyxl/POTG_NYXL-Flora-1.mp4',
  'https://potg-test-videos.s3.ap-northeast-2.amazonaws.com/nyxl/POTG_NYXL-Flora-2.mp4',
];

const players: Player[] = [player2, player1, player1];

const cardNames: string[] = [
  'Mercy... NOT!',
  'Flora The Sheriff - McCree',
  'Flora The Sheriff - Ashe',
];

const descriptions: string[] = [
  "This Mercy has no mercy. Be at the FULL MERCY of Friday's Mercy!",
  "See why The Sheriff show why he's the deadliest gun in the West.",
  "See why The Sheriff show why he's the deadliest gun in the West.",
];

const commonDistribution: CardDistribution = {
  total: 30,
  active: 30,
  onsale: 30,
  burned: 0,
  preserved: 0,
};

const images: string[] = [Image1, Image2, Image3];

export const sampleCardInfos: CardInfo[] = [];

for (let i = 0; i < videoUrls.length; i += 1) {
  const cardInfo: CardInfo = {
    id: i,
    creater,
    player: players[i],
    name: cardNames[i],
    images: [images[i], POTGImage],
    description: descriptions[i],
    videoUrl: videoUrls[i],
    gameType: GameType.Overwatch,
    cardClass: CardClass.Rare,
    distribution: commonDistribution,
    livedAt: new Date(),
  };
  sampleCardInfos.push(cardInfo);
}

export const sampleCards: Card[] = [];

for (let i = 0; i < 3; i += 1) {
  const card: Card = {
    id: 37 * (i + 1),
    cardIndex: i,
    cardInfo: sampleCardInfos[(i * 37) % 12],
    owner: null,
    cardStatus: CardStatus.onsale,
  };
  sampleCards.push(card);
}

export const samplePack: Pack = {
  id: 1,
  name: 'NYXL first Pack',
  price: 9900,
  imageUrl: PackImg,
  description: `"POTG에 오신 것을 환영합니다.

POTG는 개개인 스트리머들이 방송을 하며 갖는 멋진 순간들을 기록하여
가질 수 있고, 응원할 수 있도록 만든 플랫폼 입니다.

본 팩은 특별히 오버워치 NYXL 팀 소속원들의 스트리밍 영상들로 구성되어 있습니다.
게이머들이 뽑은 재미있거나, 멋졌던 순간들 디지털 카드로 구성되어 있습니다..

총 18개의 카드 중, 한 팩당 3장의 카드를 이 팩을 통하여 얻으실 수 있습니다.
개인 구매 제한은 한 건으로 제한됩니다."`,
  creaters: [creater],
  players: [player1, player2],
  cardInfos: sampleCardInfos,
  createdAt: new Date(),
};
