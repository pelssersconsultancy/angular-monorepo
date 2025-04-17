import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-layout',
  standalone: true,
  template: `
    <div class="flex flex-col min-h-screen">
      <header class="bg-blue-600 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl font-bold">Angular demo 1</h1>
          <nav class="space-x-4">
            <a routerLink="/home" class="hover:underline">Home</a>
            <a routerLink="/form-demo" class="hover:underline">Form demo</a>
          </nav>
        </div>
      </header>
      <main class="flex-1 container mx-auto p-4">
        <ng-content></ng-content>
      </main>
      <footer class="bg-gray-100 text-center p-4">
        <p class="text-sm text-gray-600">&copy; 2025 Angular Demo</p>
      </footer>
    </div>
  `,
  styles: [],
})
export class LayoutComponent {}
