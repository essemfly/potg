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
    email: String
    name: String
}

export type Creator = {
    name: String
    email: String
    twitchUrl: String
}

export type PackModel = {
    id: Number;
    name: String;
    description: String;
    creators: Creator[];
    cards: CardInfo[];
    createdAt: Date;
}

export type CardDistribution = {
    total: Number
    active: Number
    onsale: Number
    burned: Number
    preserved: Number
}

export type CardInfo = {
    id: Number
    creator: String
    name: String
    description: String
    videoUrl: String
    gameType: GameType
    cardClass: CardClass
    distribution: CardDistribution
}

export type Card = {
    cardIndex: Number
    cardInfo: CardInfo
    owner: User
    cardStatus: CardStatus
}
