import { Creater } from "../Creater/Creater"
import { User } from "../User/User"

export type CardInfo = {
    id: number
    creater: Creater
    name: string
    description: string
    images: string[]
    videoUrl: string
    gameType: GameType
    cardClass: CardClass
    distribution: CardDistribution
    livedAt: Date;
}

export type Card = {
    id: number
    cardIndex: number
    cardInfo: CardInfo
    owner: User | null
    cardStatus: CardStatus
}

export enum GameType {
    Overwatch = 1,
    Starcraft1
}

export enum CardClass {
    Common = 1,
    Rare,
    Unique,
    Legendary,
}

export enum CardStatus {
    onsale = 1,
    burned,
    preserved,
}

export type CardDistribution = {
    total: number
    active: number
    onsale: number
    burned: number
    preserved: number
}

