import { Component, OnInit } from '@angular/core';
import { Game } from '../interfaces/game';
import { GameService } from '../services/game-service';
import { CommonModule } from '@angular/common';
import { Card } from '../interfaces/card';
import { CardService } from '../services/card-service';
import { GameCard } from './game-card/game-card';

@Component({
  selector: 'app-games',
  imports: [
    CommonModule,
    GameCard
  ],
  templateUrl: './games.html',
  styleUrl: './games.css',
  standalone: true
})
export class Games implements OnInit {
  protected games: Game[] = [];
  protected cards: Card[] = [];

  constructor(private gameService: GameService, private cardService: CardService) {}
  
  ngOnInit(): void {
    this.gameService.getGames()
    .subscribe({
      next: (game: Game[]) => {
        this.games = game;
      }
    });

    this.cardService.getCards()
    .subscribe({
      next: (card: Card[]) => {
        this.cards = card;
      }
    });
  }

}
