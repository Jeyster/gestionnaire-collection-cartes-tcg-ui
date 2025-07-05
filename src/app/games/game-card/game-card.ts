import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Game } from '../../interfaces/game';

/**
 * @title Card overview
 */
@Component({
  selector: 'app-game-card',
  templateUrl: 'game-card.html',
  styleUrl: 'game-card.css',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameCard {

  @Input() game!: Game;

  voirCartes() {
    console.log("on va voir les crates ?");
  }

}
