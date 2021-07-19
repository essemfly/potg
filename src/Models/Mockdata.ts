import { Creater, Pack, Card, CardInfo, CardDistribution, CardClass, GameType, CardStatus, } from "./Card"
import pack1Img from "../Components/pack1.png"

const creater1: Creater = {
  id: 552,
  name: "FLORA",
  email: "flora@nyxl.com",
  twitchUrl: "flora@twitch.tv",
  avatarUrl: "https://d1u1mce87gyfbn.cloudfront.net/hero/dva/icon-portrait.png"
}

const creater2: Creater = {
  id: 889,
  name: "Friday",
  email: "friday@nyxl.com",
  twitchUrl: "friday@twitch.tv",
  avatarUrl: "https://d1u1mce87gyfbn.cloudfront.net/hero/mercy/icon-portrait.png",
}


const videoUrls: string[] = [
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
]

const creaters: Creater[] = [
  creater1, creater2, creater1, creater2, creater1, creater2, creater1, creater2, creater1, creater2, creater1, creater2
]


const cardNames: string[] = [
  "와 이건 무엇? 어마무시하네",
  "지금이 몇시냐? 오!!!",
  "이거시야 말로 신기성의 농구입니다",
  "나랏말쓰미 관샘보살",
  "ㅎㅎㅎㅎ.. 이것도 재미있네?",
  "나는야 헛소리 대마왕",
  "한치두치세치네치 뿌구빵",
  "희야! 날좀 바라봐",
  "사랑했지만 그건 전설이였어",
  "혼자만하는사랑",
  "결혼했다고 그 사람!",
  "너와 결혼까지 생각했어",
]

const descriptions: string[] = [
  "This is a description 1",
  "This is a description 2",
  "This is a description 3",
  "This is a description 4",
  "This is a description 5",
  "This is a description 6",
  "This is a description 7",
  "This is a description 8",
  "This is a description 9",
  "This is a description 10",
  "This is a description 11",
  "This is a description 12",
]

const commonDistribution: CardDistribution = {
  total: 30,
  active: 30,
  onsale: 30,
  burned: 0,
  preserved: 0,
}


export const sampleCardInfos: CardInfo[] = []

for (let i = 0; i < videoUrls.length; i += 1) {
  const cardInfo: CardInfo = {
    id: i,
    creater: creaters[i],
    name: cardNames[i],
    images: [
      `https://picsum.photos/seed/" + ${i*37} + "/300`, 
      `https://picsum.photos/seed/" + ${i*41} + "/300`,
      `https://picsum.photos/seed/" + ${i*43} + "/300`,
    ],
    description: descriptions[i],
    videoUrl: videoUrls[i],
    gameType: GameType.Overwatch,
    cardClass: CardClass.Rare,
    distribution: commonDistribution,
    livedAt: new Date(),

  }
  sampleCardInfos.push(cardInfo)
}

export const sampleCards: Card[] = []

for (let i = 0; i < 3; i += 1) {
  const card: Card = {
    id: 37 * i,
    cardIndex: i,
    cardInfo: sampleCardInfos[i * 37 % 12],
    owner: null,
    cardStatus: CardStatus.onsale
  }
  sampleCards.push(card)
}


export const samplePack: Pack = {
  id: 1,
  name: "NYXL first Pack",
  price: 9900,
  imageUrl: pack1Img,
  description: `"POTG에 오신 것을 환영합니다. 

POTG는 개개인 스트리머들이 방송을 하며 갖는 멋진 순간들을 기록하여
가질 수 있고, 응원할 수 있도록 만든 플랫폼 입니다.

본 팩은 특별히 오버워치 NYXL 팀 소속원들의 스트리밍 영상들로 구성되어 있습니다.
게이머들이 뽑은 재미있거나, 멋졌던 순간들 디지털 카드로 구성되어 있습니다..

총 18개의 카드 중, 한 팩당 3장의 카드를 이 팩을 통하여 얻으실 수 있습니다.
개인 구매 제한은 한 건으로 제한됩니다."`,
  creaters: [creater1, creater2],
  cardInfos: sampleCardInfos,
  createdAt: new Date(),
}
