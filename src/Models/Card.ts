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

export type User = {
    email: string
    name: string
}

export type Creater = {
    id: number;
    name: string
    email: string
    twitchUrl: string
    avatarUrl: string
}

export type Pack = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    creaters: Creater[];
    cardInfos: CardInfo[];
    createdAt: Date;
}

export type CardDistribution = {
    total: number
    active: number
    onsale: number
    burned: number
    preserved: number
}

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
