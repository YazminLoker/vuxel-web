
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    @if (esInicio()) {
      <app-navbar />
    }

    <router-outlet />

    @if (esInicio()) {
      <app-footer />
    }
  `,
  styleUrl: './app.scss'
})
export class App {
  private router = inject(Router);

  esInicio(): boolean {
    return this.router.url.split(/[?#]/)[0] === '/';
  }
}
