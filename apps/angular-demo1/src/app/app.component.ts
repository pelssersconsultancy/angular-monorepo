import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  imports: [LayoutComponent, RouterModule, RouterOutlet],
  selector: 'app-root',
  template: ` <app-layout>
    <router-outlet></router-outlet>
  </app-layout>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
