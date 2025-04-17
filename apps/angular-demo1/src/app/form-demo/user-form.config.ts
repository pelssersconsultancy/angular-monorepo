// user-form.config.ts

import { Validators } from '@angular/forms';
import { TypedFormSchema } from '../dynamic-form/typed-form-schema.model';

export interface UserForm {
  name: string;
  email: string;
  age: number;
}

export const USER_FORM_SCHEMA: TypedFormSchema<UserForm> = [
  {
    key: 'name',
    label: 'Full Name',
    type: 'text',
    defaultValue: '',
    placeholder: 'Enter your name',
    validators: [Validators.required],
  },
  {
    key: 'email',
    label: 'Email Address',
    type: 'email',
    defaultValue: '',
    placeholder: 'Enter your email',
    validators: [Validators.required, Validators.email],
  },
  {
    key: 'age',
    label: 'Age',
    type: 'number',
    placeholder: 'Enter your age',
    defaultValue: 18,
  },
];
