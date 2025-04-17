import { Component, OnInit } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  categories: any[] = [];
  category: number = 9;
  difficulty: string = 'easy';
  constructor(private quizService: QuizService, private router: Router) {}
  ngOnInit() {
    this.quizService.getCategories().subscribe(data => {
      this.categories = data.trivia_categories;
      console.log(this.categories);
      console.log(this.category)
    });
  }

  startQuiz() {
    localStorage.setItem(
      'quiz-settings',
      JSON.stringify({
        category: this.category,
        difficulty: this.difficulty,
      })
    );
    this.router.navigate(['/quiz']);
  }
}
