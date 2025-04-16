import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

@Component({
  imports: [LayoutComponent],
  selector: 'app-root',
  template: ` <app-layout></app-layout>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {}
