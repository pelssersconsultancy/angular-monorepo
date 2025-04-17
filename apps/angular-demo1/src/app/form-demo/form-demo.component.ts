import { Component } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { USER_FORM_SCHEMA } from './user-form.config';

@Component({
  imports: [DynamicFormComponent],
  selector: 'app-form-demo',
  standalone: true,
  template: `
    <div>
      <h1 class="font-bold">Form demo</h1>
      <app-dynamic-form [schema]="schema" class="mt-2"></app-dynamic-form>
    </div>
  `,
  styles: [],
})
export class FormDemoComponent {
  protected readonly schema = USER_FORM_SCHEMA;
}
