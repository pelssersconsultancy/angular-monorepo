import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <div class="flex flex-col min-h-screen">
      <header class="bg-blue-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">Angular demo 1</h1>
          <nav class="space-x-4">
            <a routerLink="/" class="hover:underline">Home</a>
            <a routerLink="/about" class="hover:underline">About</a>
            <a routerLink="/contact" class="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
      <main class="flex-1 container mx-auto p-4">
        <router-outlet></router-outlet>
      </main>
      <footer class="bg-gray-100 text-center p-4">
        <p class="text-sm text-gray-600">&copy; 2025 Angular Demo</p>
      </footer>
    </div>
  `,
  styles: [],
})
export class LayoutComponent {}
