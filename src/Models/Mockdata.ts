import { Creator, Pack, Card, CardInfo, CardDistribution, CardClass, GameType, CardStatus, } from "./Card"
import pack1Img from "../Components/pack1.png"

const creator1: Creator = {
  name: "FLORA",
  email: "flora@nyxl.com",
  twitchUrl: "flora@twitch.tv",
  avatarUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d5"
}

const creator2: Creator = {
  name: "Friday",
  email: "friday@nyxl.com",
  twitchUrl: "friday@twitch.tv",
  avatarUrl: "https://gravatar.com/avatar/0a159c0520d56a3d6a616c9c77313c74?d=robohash",
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

const creators: Creator[] = [
  creator1, creator2, creator1, creator2, creator1, creator2, creator1, creator2, creator1, creator2, creator1, creator2
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

for (let i = 0; i < videoUrls.length; i+=1) {
  const cardInfo: CardInfo = {
    id: i,
    creator: creators[i],
    name: creators[i].name,
    description: descriptions[i],
    videoUrl: videoUrls[i],
    gameType: GameType.Overwatch,
    cardClass: CardClass.Rare,
    distribution: commonDistribution

  }
  sampleCardInfos.push(cardInfo)
}

export const sampleCards: Card[] = []

for (let i = 0; i < 3; i+=1) {
  const card: Card = {
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
  creators: [creator1, creator2],
  cardInfos: sampleCardInfos,
  createdAt: new Date(),
}
