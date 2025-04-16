import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResoultComponent } from './components/resoult/resoult.component';
import { HistoryComponent } from './components/history/history.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'resoult', component: ResoultComponent },
  { path: 'history', component: HistoryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
