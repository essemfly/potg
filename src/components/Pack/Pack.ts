import { CardInfo } from "../Card/Card"
import { Creater } from "../Creater/Creater"

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

