import { Component, OnInit } from '@angular/core';
import { Game } from '../interfaces/game';
import { GameService } from '../services/game-service';
import { CommonModule } from '@angular/common';
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

  constructor(private gameService: GameService) {}
  
  ngOnInit(): void {
    this.gameService.getGames()
    .subscribe({
      next: (game: Game[]) => {
        this.games = game;
      }
    });
  }

}
