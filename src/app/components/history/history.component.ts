import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit{
  history: any[] = [];

  ngOnInit() {
    this.history = JSON.parse(localStorage.getItem('quiz-history') || '[]');
  }
}
