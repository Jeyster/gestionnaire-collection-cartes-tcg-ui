import { Game } from "./game";

export interface Card {
    idCard: number,
    name: string,
    gameDto: Game
}
