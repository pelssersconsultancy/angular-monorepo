// dynamic-form.component.ts
import { Component, input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TypedFormSchema } from './typed-form-schema.model';
import { TypedFormBuilderService } from './typed-form-builder.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="submit()"
      class="flex flex-col flex-start"
    >
      @for(field of schema(); track field.key) {
      <mat-form-field appearance="fill">
        <mat-label>{{ field.label }}</mat-label>
        <input
          matInput
          [type]="field.type"
          [formControlName]="field.key"
          [placeholder]="field.placeholder ?? ''"
        />
      </mat-form-field>
      }
      <button mat-raised-button color="primary" type="submit">Submit</button>
    </form>
  `,
})
export class DynamicFormComponent<T extends object> implements OnInit {
  schema = input.required<TypedFormSchema<T>>();

  form!: FormGroup<{ [K in keyof T]: FormControl<T[K]> }>;

  constructor(private formBuilder: TypedFormBuilderService) {}

  ngOnInit(): void {
    console.log('Schema:', this.schema());
    this.form = this.formBuilder.buildForm(this.schema());
    console.log(this.form);
  }

  submit(): void {
    console.log('Submitted:', this.form.value);
    if (this.form.valid) {
      console.log('Submitted:', this.form.value);
    } else {
      console.warn('Invalid form');
      console.log(this.form.errors);
    }
  }
}
