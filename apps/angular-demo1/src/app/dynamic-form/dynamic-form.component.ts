import { Component, HostBinding, input } from '@angular/core';
import { FormStructure } from './form-structure';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  template: `
    <div>
      <form class="mt-2">
        <div class="flex flex-col gap-2">
          @for (fieldGroup of formStructure().formFieldGroups; track
          fieldGroup.id) {
          <div>FieldGroup {{ fieldGroup.label }}</div>
          }
        </div>
      </form>
    </div>
  `,
  styles: ':host {  display: block; } ',
})
export class DynamicFormComponent {
  @HostBinding('class') class = '';
  readonly formStructure = input.required<FormStructure>();
}
