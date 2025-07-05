import { Component } from '@angular/core';
import { Games } from './games/games';

@Component({
  selector: 'app-root',
  imports: [
    Games
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
