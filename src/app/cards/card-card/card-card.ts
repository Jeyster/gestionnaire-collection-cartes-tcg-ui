import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Card } from '../../interfaces/card';

/**
 * @title Card overview
 */
@Component({
  selector: 'app-card-card',
  templateUrl: 'card-card.html',
  styleUrl: 'card-card.css',
  imports: [MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardCard {

  @Input() card!: Card;

}
