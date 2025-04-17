import { Component } from '@angular/core';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { FormStructure } from '../dynamic-form/form-structure';

@Component({
  imports: [DynamicFormComponent],
  selector: 'app-form-demo',
  standalone: true,
  template: `
    <div>
      <h1>Form demo</h1>
      <app-dynamic-form
        [formStructure]="formStructure"
        class="mt-6"
      ></app-dynamic-form>
    </div>
  `,
  styles: [],
})
export class FormDemoComponent {
  protected formStructure: FormStructure = {
    formFieldGroups: [
      {
        id: 'Name',
        label: 'Name',
        fields: [
          {
            id: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholder: 'Enter firstName',
          },
          {
            id: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Enter lastName',
          },
        ],
      },
      {
        id: 'Address',
        label: 'Address',
        fields: [
          {
            id: 'city',
            label: 'City',
            type: 'text',
            placeholder: 'Enter City',
          },
          {
            id: 'number',
            label: 'Number',
            type: 'number',
            placeholder: 'Enter Number',
          },
        ],
      },
    ],
  };
}
