import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'form-demo', component: FormDemoComponent },
];
