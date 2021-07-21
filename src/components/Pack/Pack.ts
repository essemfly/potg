import { CardInfo } from '../Card/Card';
import { Creater, Player } from '../Creater/Creater';

export type Pack = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  players: Player[];
  creaters: Creater[];
  cardInfos: CardInfo[];
  createdAt: Date;
};
