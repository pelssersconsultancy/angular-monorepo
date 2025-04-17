import { Component, HostBinding, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormStructure } from './form-structure';

@Component({
  imports: [MatCardModule, MatFormFieldModule],
  selector: 'app-dynamic-form',
  standalone: true,
  template: `
    <div>
      <form class="mt-2">
        <div class="flex flex-col gap-2">
          @for (fieldGroup of formStructure().formFieldGroups; track
          fieldGroup.id) {
          <mat-card>
            <mat-card-title>{{ fieldGroup.label }}</mat-card-title>
            <mat-card-content>
              <!-- @for (formField of fieldGroup.fields; track formField.id) {
              <mat-form-field>
                <mat-label>{{ formField.label }}</mat-label>
              </mat-form-field>
              } -->
            </mat-card-content>
          </mat-card>

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
