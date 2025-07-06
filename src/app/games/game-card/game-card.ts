import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Game } from '../../interfaces/game';
import { RouterLink } from '@angular/router';

/**
 * @title Card overview
 */
@Component({
  selector: 'app-game-card',
  templateUrl: 'game-card.html',
  styleUrl: 'game-card.css',
  imports: [
    MatCardModule, 
    MatButtonModule, 
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCard {

  @Input() game!: Game;
  
}
