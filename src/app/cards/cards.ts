import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardCard } from './card-card/card-card';
import { Card } from '../interfaces/card';
import { CardService } from '../services/card-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [
    CommonModule,
    CardCard
  ],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  gameName: string = '';

  protected cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.gameName = params['gameName'];
    });
    
    this.cardService.getCardsByGameName(this.gameName)
    .subscribe({
      next: (card: Card[]) => {
        this.cards = card;
      }
    });
  }

  retour() {
    this.router.navigate(['/games']);
  }
}
