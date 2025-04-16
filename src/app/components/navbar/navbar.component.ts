import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/quiz', label: 'Quiz' },
    { path: '/resoult', label: 'Result' },
    { path: '/history', label: 'History' },
  ];
}
