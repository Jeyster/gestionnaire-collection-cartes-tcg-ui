import { Component } from '@angular/core';
import { Gestionnairecollection } from './gestionnairecollection/gestionnairecollection';

@Component({
  selector: 'app-root',
  imports: [
    Gestionnairecollection
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
