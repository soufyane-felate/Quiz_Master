import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private basUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) {}

  getQuestion(category: number, difficulty: string): Observable<any> {
    return this.http.get(
      `${this.basUrl}?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    );
  }
  getCategories(): Observable<any> {
    return this.http.get('https://opentdb.com/api_category.php');
  }
}
